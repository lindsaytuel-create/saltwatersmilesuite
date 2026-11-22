/* Myofunctional therapy forms: Refer a Patient (providers) and Request a
   Consultation (patients and families).

   Both send to our Google Apps Script web app, which runs in the
   myo@saltwatersmilesuite.com Google Workspace account (covered by a HIPAA
   business associate agreement with Google) and emails each submission, with
   any attachments, to that inbox. The script lives in setup/, which is kept
   off the public site. Nothing from these forms is sent anywhere else, stored
   in the browser, or put in the page address.

   Until ENDPOINT is filled in, the pages stay in their offline mode: the
   referral form is print-only, and the consultation page asks people to call
   or email. */
(function () {
  // Web app URL from Apps Script: Deploy > Manage deployments > Web app
  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzrTyDSx8HHQ5QPbktDc1u6VMVjzOOJDKDzpQyIc4U5KHtn96owiCdLV0RzFeNZufvV/exec';

  var FORMS = {
    referralForm: {
      form: 'referral',
      button: 'Send Referral',
      done: 'Referral sent. Thank you.',
      next: 'We will reach out to the patient or family to schedule a consultation, ' +
            'and let your office know once we have connected. You can still print a copy for the patient.'
    },
    consultForm: {
      form: 'consult',
      button: 'Send Request',
      done: 'Request sent. Thank you.',
      next: 'We will be in touch soon to schedule your consultation.'
    }
  };

  var MAX_FILES = 5;
  var MAX_BYTES = 10 * 1024 * 1024;        // per file
  var MAX_TOTAL = 20 * 1024 * 1024;        // all files, to fit in one email
  var ALLOWED = /^(image\/(jpeg|png|heic|heif|webp|gif)|application\/pdf)$/;
  var TIMEOUT_MS = 120000;                 // large uploads on slow connections
  var PHONE = '(503) 468-7006';
  var loadedAt = Date.now();               // the script rejects instant (bot) submissions

  if (!ENDPOINT) return;

  // switch the page from offline mode to send mode
  document.querySelectorAll('[data-rf="online"]').forEach(function (el) { el.hidden = false; });
  document.querySelectorAll('[data-rf="offline"]').forEach(function (el) { el.hidden = true; });

  Object.keys(FORMS).forEach(function (id) {
    var form = document.getElementById(id);
    if (form) setUp(form, FORMS[id]);
  });

  // some phones report HEIC photos with an empty type
  function typeOf(file) {
    if (file.type) return file.type;
    return /\.hei[cf]$/i.test(file.name) ? 'image/heic' : '';
  }

  function fileProblem(files) {
    if (files.length > MAX_FILES) return 'Please choose up to ' + MAX_FILES + ' files.';
    for (var i = 0; i < files.length; i++) {
      if (!ALLOWED.test(typeOf(files[i]))) return '“' + files[i].name + '” isn’t a photo or PDF. Please remove it.';
      if (files[i].size > MAX_BYTES) return '“' + files[i].name + '” is over 10 MB. Please send a smaller file.';
    }
    var total = files.reduce(function (sum, f) { return sum + f.size; }, 0);
    if (total > MAX_TOTAL) return 'Together the files are over 20 MB. Please send fewer or smaller files.';
    return '';
  }

  function readFile(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        resolve({ name: file.name, type: typeOf(file), data: String(reader.result).split(',')[1] || '' });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  function setUp(form, cfg) {
    var status = form.querySelector('.rf-status');
    var sendBtn = form.querySelector('button[type="submit"]');
    var fileInput = form.querySelector('input[type="file"]');
    var fileList = form.querySelector('.rf-files');
    var sending = false;

    // messages are added as plain text; the office number becomes a tap-to-call link
    function show(kind, title, text) {
      status.className = 't-sent rf-status' + (kind === 'error' ? ' rf-status--error' : '');
      status.innerHTML = '';
      var p = document.createElement('p');
      var strong = document.createElement('strong');
      strong.textContent = title;
      p.appendChild(strong);
      String(' ' + text).split(PHONE).forEach(function (part, i) {
        if (i) {
          var a = document.createElement('a');
          a.href = 'tel:+15034687006';
          a.textContent = PHONE;
          p.appendChild(a);
        }
        p.appendChild(document.createTextNode(part));
      });
      status.appendChild(p);
      status.hidden = false;
      status.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function chosenFiles() {
      return fileInput ? Array.prototype.slice.call(fileInput.files || []) : [];
    }

    function resetButton() {
      sendBtn.disabled = false;
      sendBtn.textContent = cfg.button;
    }

    if (fileInput) {
      fileInput.addEventListener('change', function () {
        var files = chosenFiles();
        fileList.innerHTML = '';
        files.forEach(function (f) {
          var li = document.createElement('li');
          li.textContent = f.name + ' (' + Math.max(1, Math.round(f.size / 1024)) + ' KB)';
          fileList.appendChild(li);
        });
        fileList.hidden = files.length === 0;
        var problem = fileProblem(files);
        if (problem) show('error', 'Check your files.', problem);
        else status.hidden = true;
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) return;

      var files = chosenFiles();
      var problem = fileProblem(files);
      if (problem) {
        show('error', 'Check your files.', problem);
        return;
      }

      // every named field; checked boxes are joined with commas
      var data = { form: cfg.form };
      Array.prototype.forEach.call(form.elements, function (el) {
        if (!el.name || el.type === 'file') return;
        if (!(el.name in data)) data[el.name] = '';
        if ((el.type === 'checkbox' || el.type === 'radio') && !el.checked) return;
        var value = el.value.trim();
        if (value) data[el.name] = data[el.name] ? data[el.name] + ', ' + value : value;
      });
      data.elapsed = Date.now() - loadedAt;

      sending = true;
      sendBtn.disabled = true;
      sendBtn.textContent = files.length ? 'Uploading…' : 'Sending…';

      var controller = window.AbortController ? new AbortController() : null;
      var timer = controller ? setTimeout(function () { controller.abort(); }, TIMEOUT_MS) : 0;

      Promise.all(files.map(readFile))
        .then(function (encoded) {
          data.files = encoded;
          // plain text body, no cookies: a simple request straight to Apps Script
          return fetch(ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'omit',
            signal: controller ? controller.signal : undefined
          });
        })
        .then(function (res) { return res.text(); })
        .then(function (text) {
          var reply = null;
          try { reply = JSON.parse(text); } catch (err) { /* not a reply from our script */ }

          if (reply && reply.result === 'success') {
            sendBtn.textContent = 'Sent';
            show('ok', cfg.done, (reply.reference ? 'Reference #' + reply.reference + '. ' : '') + cfg.next);
            return;
          }
          resetButton();
          show('error', 'Not sent.', reply && reply.message
            ? reply.message
            : 'Something went wrong on our end. Please try again, or call us at ' + PHONE + '.');
        })
        .catch(function (err) {
          resetButton();
          show('error', 'Not sent.', err && err.name === 'AbortError'
            ? 'This is taking too long. Please check your connection and try again, or call us at ' + PHONE + '.'
            : 'We couldn’t reach our office. Please check your connection and try again, or call us at ' + PHONE + '.');
        })
        .then(function () {
          clearTimeout(timer);
          sending = false;
        });
    });

    form.addEventListener('reset', function () {
      if (sending) return;
      status.hidden = true;
      resetButton();
      if (fileList) { fileList.innerHTML = ''; fileList.hidden = true; }
    });
  }
})();
