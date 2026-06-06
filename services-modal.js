const SERVICES = {
  'single-gem': {
    name: 'Single Tooth Gem',
    price: '$40.00',
    duration: '30 minutes',
    images: [
      'images/SingleGem.png',
    ],
    description: `<p>Add a little sparkle to your smile with luxury tooth gems applied in a safe, non-invasive cosmetic service. Create a custom look that's subtle, bold, classy, or playful! Tooth gems are painless, enamel-safe when properly applied, and can last for 6+ months with good care. Whether you want a tiny shimmer or a statement smile, we're here to make your vision shine.</p>
<p>★ For best results, tooth gem appointments must be scheduled at least 2 weeks after any whitening treatment to allow for proper adhesion.</p>`,
    colorNote: 'Various colors available. Add on multiple tooth gems upon checkout. If you have a design in mind, please message us for an inquiry.',
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=92970419',
  },

  'swarovski-gems': {
    name: 'Swarovski Fairy Dust Gems',
    price: 'from $60.00',
    duration: '45 minutes',
    images: [
      'images/fairydust1.png',
      'images/fairydust3.png',
      'images/fairydust4.png',
    ],
    description: `<p>A delicate, high-sparkle tooth gem design using Swarovski quality micro-mini crystals for a soft shimmering effect. Choose a half-tooth accent for subtle sparkle or a full-tooth fairy dust design for a bolder glow. Final pricing may vary based on tooth size, placement, and design complexity.</p>
<p>Half tooth: $60 | Full tooth: $120</p>
<p>★ For best results, tooth gem appointments must be scheduled at least 2 weeks after any whitening treatment to allow for proper adhesion.</p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93892840',
  },

  'specialty-gems': {
    name: 'Specialty Tooth Gems',
    price: 'from $60.00',
    images: [
      'images/specialtyoblong.png',
      'images/ButterflyGem.png',
      'images/Butterfly2.jpeg',
      'images/heartgem.png',
      'images/gemparty2.png',
    ],
    description: `<p>Stand out with one-of-a-kind specialty gems including hearts, stars, flowers, and more. These premium gems are applied with the same safe, non-invasive technique and are designed to make your smile truly unforgettable.</p>
<p>Final pricing depends on design and gem selection.</p>
<p>★ For best results, tooth gem appointments must be scheduled at least 2 weeks after any whitening treatment to allow for proper adhesion.</p>`,

    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93273347',
  },

  'gem-removal': {
    name: 'Tooth Gem Removal',
    price: '$20.00',
    duration: '30 minutes',
    images: [
      'images/Removal2.png',
    ],
    description: `<p>Safely remove existing tooth gems. This service includes gentle removal of the gem and adhesive, followed by polishing to leave the tooth smooth, clean, and natural-looking. Perfect for changing styles, replacing old gems, or returning to a gem-free smile. Quick, painless, and non-invasive.</p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93260550',
  },

  'gem-party': {
    name: 'Gem Party',
    price: 'starting at $300',
    images: [
      'images/gemparty2.png',
    ],
    description: `<p>Make your next birthday, girls' night, bridal event, or special occasion sparkle with a tooth gem party.</p>
<p>This package includes <strong>10 single crystal gems to split among your group however you'd like</strong>. Choose one gem per person, multiple gems for a few guests, or any combination that works for your party.</p>
<p>Available <strong>in-office</strong>, <strong>at your home</strong>, or <strong>at your event/party space</strong>.</p>
<p><em>For larger parties, mobile events, or specialty gems, please contact us for custom pricing.</em></p>
<p><strong>Must be booked at least 2 weeks in advance. Participants must be 14 years or older. Guests under 18 require parent/guardian consent.</strong></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93263036',
  },

  'signature-whitening': {
    name: 'Signature Saltwater Whitening',
    price: '$350.00',
    duration: '75 minutes',
    images: [
      'images/signaturesaltwaterwhitening.png',
    ],
    description: `<p>Our most comprehensive whitening experience for clients seeking maximum brightening in a single visit. Your appointment begins with a nourishing lip oil application and personalized shade consultation, followed by placement of a protective gum barrier and multiple whitening sessions.</p>
<p>Many clients notice immediate brightening, with results continuing to develop over the following several days.</p>
<p>Add-on a desensitizing treatment at the end of your service for $25.</p>
<p><em>If you also want to add a tooth gem there must be a 2 week wait after whitening for proper adhesion of gem.</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93260957',
  },

  'coastal-whitening': {
    name: 'Coastal Express Whitening',
    price: '$150.00',
    duration: '45 minutes',
    images: [
      'images/coastalexpress22.png',
    ],
    description: `<p>A quick and effective whitening refresh designed to noticeably brighten your smile in less time. Perfect for maintenance appointments, special events, first-time whitening clients, or anyone looking for a brighter smile without a full-length treatment.</p>
<p>Add-on a desensitizing treatment at the end of your service for $25.</p>
<p><em>If you also want to add a tooth gem there must be a 2 week wait after whitening for proper adhesion of gem.</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93261896',
  },

  'wedding-package': {
    name: 'Glow-Up Duo Package',
    price: '$600.00',
    images: [
      'images/WeddingPackage.png',
    ],
    description: `<p>Perfect for weddings, vacations, photos, birthdays, or special events.</p>
<p>2 people - $600</p>
<p>Includes 2 Signature Saltwater Whitening treatments (1.5 hrs)<br><em>2 Free on-the-go whitening pens</em></p><p><em>Please contact for larger parties and mobile inquiries. We are available to come to you!</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93262904',
  },

  'desensitizing': {
    name: 'Desensitizing Treatment',
    price: '$25.00',
    images: [
      'images/desensitizing.png',
    ],
    description: `<p>While mild tooth sensitivity after whitening is uncommon, it can happen and is usually temporary. This treatment is a great option if you are prone to sensitivity or want extra comfort after your whitening appointment.</p>
<p>Schedule a desensitizing treatment as an add-on to any whitening service or as a stand-alone maintenance treatment for occasional tooth sensitivity. A professional desensitizing gel is applied after the whitening process is complete to help calm the teeth, support comfort, and reduce post-whitening sensitivity.</p>
<p><em>Please note: this treatment is intended for temporary whitening-related sensitivity or general sensitivity maintenance. It does not treat sensitivity caused by gum recession, cavities, cracked teeth, exposed roots, infection, or other dental conditions. If sensitivity is persistent, severe, or localized to one tooth, we recommend seeing a dentist for an evaluation.</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93868964',
  },

  'serenity-session': {
    name: 'Serenity Session Add-on',
    price: '$25.00',
    images: [
      'images/serenitysession.png',
    ],
    description: 'Upgrade your experience with bluetooth headphones, a cozy blanket, aromatherapy, and a cooling jade eye mask.',
    note: 'Add-on to any whitening treatment at check-out.',
  },

  'takehome-kit': {
    name: 'Saltwater Brightening Kit',
    price: '$60.00',
    images: [
      'images/takehomekit.jpeg',
    ],
    description: `<p>Whiten on your schedule with our professional-strength take-home whitening kit. Featuring 16% carbamide peroxide gel, this convenient at-home option is designed to gradually brighten your smile while helping minimize sensitivity.</p>
<p>Perfect for maintaining your whitening results between appointments, extending the benefits of your professional whitening treatment, or achieving additional brightening from the comfort of home. Many clients begin noticing brighter teeth within a few days, with results continuing to develop throughout the whitening process.</p>
<p>Available as an add-on to any whitening service, or simply stop by the suite to pick up your kit and receive personalized usage instructions.</p>
<p>Includes: LED teeth whitening light, teeth whitening gel, whitening tray, tray case, and travel-friendly carrying pouch.</p>`,
    cta: 'Details',
  },

  'glo-pen': {
    name: 'Take-Home Whitening Pen',
    price: '$40.00',
    images: [
      'images/PEN.jpeg',
    ],
    description: `<p>Maintain your brighter smile between whitening appointments with our professional-strength whitening pen. The convenient brush-tip applicator allows for easy, mess-free application at home or on the go.</p>
<p>Perfect for touch-ups before special events or maintaining your whitening results, this travel-friendly pen helps target new surface stains from coffee, tea, wine, and everyday foods. Many clients notice gradual brightening with consistent use as directed.</p>
<p>Includes one professional whitening pen and usage instructions.</p>`,
    note: 'Choose as an add-on to a service when booking.',
  },



  'gift-card': {
    name: 'Gift Card',
    price: 'from $25.00',
    images: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=85',
    ],
    description: 'Give the gift of a glowing smile. Saltwater Smile Suite gift cards are redeemable for any service or product. Available in any amount starting at $25 — the perfect gift for birthdays, holidays, or just because.',
    cta: 'Buy Now',
  },
};

// ── Modal logic ──────────────────────────────────────────────

const modal       = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose  = document.getElementById('modalClose');
const modalImg    = document.getElementById('modalImg');
const modalThumbs = document.getElementById('modalThumbs');
const modalName   = document.getElementById('modalName');
const modalPrice  = document.getElementById('modalPrice');
const modalDuration = document.getElementById('modalDuration');
const modalDesc   = document.getElementById('modalDesc');
const modalColorNote = document.getElementById('modalColorNote');
const modalNote   = document.getElementById('modalNote');
const modalOptions = document.getElementById('modalOptions');
const modalCta    = document.getElementById('modalCta');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

let currentImages = [];
let currentIndex  = 0;

function setImage(index) {
  currentIndex = index;
  modalImg.src = currentImages[index];

  document.querySelectorAll('.thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  galleryPrev.style.display = currentImages.length > 1 ? '' : 'none';
  galleryNext.style.display = currentImages.length > 1 ? '' : 'none';
}

function openModal(serviceId) {
  const s = SERVICES[serviceId];
  if (!s) return;

  currentImages = s.images || [];
  currentIndex  = 0;

  // populate fields
  modalName.textContent  = s.name;
  modalPrice.textContent = s.price;
  modalDuration.innerHTML = s.duration ? `<em>${s.duration}</em>` : '';
  modalDesc.innerHTML    = s.description || '';
  modalColorNote.textContent = s.colorNote || '';
  modalNote.textContent  = s.note || '';
  modalCta.textContent = s.cta || 'Book Now';
  if (s.bookingUrl) {
    modalCta.href = s.bookingUrl;
    modalCta.style.display = '';
  } else {
    modalCta.removeAttribute('href');
    modalCta.style.display = 'none';
  }

  // thumbnails
  modalThumbs.innerHTML = '';
  currentImages.forEach((src, i) => {
    const thumb = document.createElement('button');
    thumb.className = 'thumb' + (i === 0 ? ' active' : '');
    thumb.style.backgroundImage = `url('${src}')`;
    thumb.setAttribute('aria-label', `Image ${i + 1}`);
    thumb.addEventListener('click', () => setImage(i));
    modalThumbs.appendChild(thumb);
  });

  // options
  modalOptions.innerHTML = '';
  (s.options || []).forEach(opt => {
    const wrap = document.createElement('div');
    wrap.className = 'opt-group';

    const label = document.createElement('label');
    label.textContent = opt.label + ':';

    const sel = document.createElement('div');
    sel.className = 'custom-select';

    const select = document.createElement('select');
    const def = document.createElement('option');
    def.value = '';
    def.textContent = opt.placeholder || `Select ${opt.label}`;
    def.disabled = true;
    def.selected = true;
    select.appendChild(def);

    opt.choices.forEach(c => {
      const o = document.createElement('option');
      o.value = c;
      o.textContent = c;
      select.appendChild(o);
    });

    sel.appendChild(select);
    wrap.appendChild(label);
    wrap.appendChild(sel);
    modalOptions.appendChild(wrap);
  });

  setImage(0);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// wire up cards
document.querySelectorAll('[data-service]').forEach(el => {
  el.addEventListener('click', e => {
    // clicking inside the card opens modal
    // but only if it's the button OR the card itself (not text selection)
    openModal(el.dataset.service);
  });
});

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

galleryPrev.addEventListener('click', () => {
  setImage((currentIndex - 1 + currentImages.length) % currentImages.length);
});
galleryNext.addEventListener('click', () => {
  setImage((currentIndex + 1) % currentImages.length);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (!modal.classList.contains('open')) return;
  if (e.key === 'ArrowLeft')  setImage((currentIndex - 1 + currentImages.length) % currentImages.length);
  if (e.key === 'ArrowRight') setImage((currentIndex + 1) % currentImages.length);
});
