/* Refer a Patient form.

   Referrals (and any photos or files) are sent to our Google Apps Script web
   app, which runs in the myo@saltwatersmilesuite.com Google Workspace account
   (covered by a HIPAA business associate agreement with Google) and emails
   each referral, with attachments, to that inbox. The script lives in setup/,
   which is kept off the public site.

   Until ENDPOINT is filled in, the page stays in print-only mode (the "online"
   buttons, text, and upload area stay hidden). */
(function () {
  // Web app URL from Apps Script: Deploy > Manage deployments > Web app
  var ENDPOINT = '';

  var FIELDS = [
    'patient_name', 'patient_dob', 'patient_phone', 'guardian',
    'provider_name', 'practice', 'provider_phone', 'provider_contact',
    'ortho_status', 'reason', 'notes', 'website'
  ];
  var MAX_FILES = 5;
  var MAX_BYTES = 10 * 1024 * 1024;        // per file
  var MAX_TOTAL = 20 * 1024 * 1024;        // all files, to fit in one email
  var ALLOWED = /^(image\/(jpeg|png|heic|heif|webp|gif)|application\/pdf)$/;

  var form = document.getElementById('referralForm');
  if (!form || !ENDPOINT) return;

  // switch the page from print-only to send mode
  document.querySelectorAll('[data-rf="online"]').forEach(function (el) { el.hidden = false; });
  document.querySelectorAll('[data-rf="offline"]').forEach(function (el) { el.hidden = true; });

  var status = document.getElementById('rfStatus');
  var sendBtn = document.getElementById('rfSend');
  var fileInput = document.getElementById('r-files');
  var fileList = document.getElementById('rfFileList');

  function show(kind, html) {
    status.className = 't-sent rf-status' + (kind === 'error' ? ' rf-status--error' : '');
    status.innerHTML = html;
    status.hidden = false;
    status.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // some phones report HEIC photos with an empty type
  function typeOf(file) {
    if (file.type) return file.type;
    return /\.hei[cf]$/i.test(file.name) ? 'image/heic' : '';
  }

  function chosenFiles() {
    return fileInput ? Array.prototype.slice.call(fileInput.files || []) : [];
  }

  function fileProblem(files) {
    if (files.length > MAX_FILES) return 'Please choose up to ' + MAX_FILES + ' files.';
    for (var i = 0; i < files.length; i++) {
      if (!ALLOWED.test(typeOf(files[i]))) return '&ldquo;' + files[i].name + '&rdquo; isn&rsquo;t a photo or PDF.';
      if (files[i].size > MAX_BYTES) return '&ldquo;' + files[i].name + '&rdquo; is over 10 MB.';
    }
    var total = files.reduce(function (sum, f) { return sum + f.size; }, 0);
    if (total > MAX_TOTAL) return 'Together the files are over 20 MB. Please send fewer or smaller files.';
    return '';
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
      if (problem) show('error', '<p><strong>Check your files.</strong> ' + problem + '</p>');
      else status.hidden = true;
    });
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

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var files = chosenFiles();
    var problem = fileProblem(files);
    if (problem) {
      show('error', '<p><strong>Check your files.</strong> ' + problem + '</p>');
      return;
    }

    var data = {};
    FIELDS.forEach(function (key) {
      var values = [];
      form.querySelectorAll('[name="' + key + '"]').forEach(function (el) {
        if (el.type === 'checkbox') {
          if (el.checked) values.push(el.value);
        } else if (el.value.trim()) {
          values.push(el.value.trim());
        }
      });
      data[key] = values.join(', ');
    });

    sendBtn.disabled = true;
    sendBtn.textContent = files.length ? 'Uploading…' : 'Sending…';

    Promise.all(files.map(readFile))
      .then(function (encoded) {
        data.files = encoded;
        // sent as plain text so the browser doesn't need a separate permission check
        return fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(data) });
      })
      .then(function (res) { return res.json(); })
      .then(function (reply) {
        if (!reply || reply.result !== 'success') throw new Error('not saved');
        sendBtn.textContent = 'Sent';
        show('ok',
          '<p><strong>Referral sent. Thank you.</strong> We will reach out to the ' +
          'patient or family to schedule a consultation, and let your office know ' +
          'once we have connected. You can still print a copy for the family.</p>');
      })
      .catch(function () {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Referral';
        show('error',
          '<p><strong>The referral didn&rsquo;t go through.</strong> Please try again, ' +
          'or call us at <a href="tel:+15034687006">(503) 468-7006</a>.</p>');
      });
  });

  form.addEventListener('reset', function () {
    status.hidden = true;
    sendBtn.disabled = false;
    sendBtn.textContent = 'Send Referral';
    if (fileList) { fileList.innerHTML = ''; fileList.hidden = true; }
  });
})();
