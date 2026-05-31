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

  'butterfly-gem': {
    name: 'Butterfly Tooth Gem',
    price: '$60.00',
    duration: '30 minutes',
    images: [
      'images/ButterflyGem.png',
      'images/Butterfly2.jpeg',
    ],
    description: `<p>Butterfly shaped gem in various colors for a special look! A delicate, elegant touch that turns heads and expresses your unique personality.</p>
<p>★ For best results, tooth gem appointments must be scheduled at least 2 weeks after any whitening treatment to allow for proper adhesion.</p>`,
    colorNote: 'Various colors available',
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=92984919',
  },

  'swarovski-gems': {
    name: 'Swarovski Fairy Dust Gems',
    price: 'from $50.00',
    duration: '30 minutes',
    images: [
      'images/fairydust1.png',
      'images/fairydust2.png',
      'images/fairydust3.png',
      'images/fairydust4.png',
    ],
    description: `<p>A delicate, high-sparkle tooth gem design using Swarovski quality micro-mini crystals for a soft shimmering effect. Choose a half-tooth accent for subtle sparkle or a full-tooth fairy dust design for a bolder glow. Final pricing may vary based on tooth size, placement, and design complexity.</p>
<p>Half tooth: $50 | Full tooth: $100</p>
<p>★ For best results, tooth gem appointments must be scheduled at least 2 weeks after any whitening treatment to allow for proper adhesion.</p>`,
    cta: 'Book Now',
  },

  'specialty-gems': {
    name: 'Specialty Tooth Gems',
    price: '$60.00 & up',
    images: [
      'images/MicroGems.jpeg',
      'images/SpecialtyGem.png',
      'images/GemParty2.jpeg',
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
      'images/toothgemremoval.png',
    ],
    description: `<p>Safely remove existing tooth gems. This service includes gentle removal of the gem and adhesive, followed by polishing to leave the tooth smooth, clean, and natural-looking. Perfect for changing styles, replacing old gems, or returning to a gem-free smile. Quick, painless, and non-invasive.</p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93260550',
  },

  'gem-party': {
    name: 'Gem Party',
    price: 'starting at $300',
    images: [
      'images/GemParty2.jpeg',
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
    name: 'Signature Saltwater Glow Whitening',
    price: '$350.00',
    duration: '45 minutes',
    images: [
      'images/Signature2.jpeg',
    ],
    description: `<p>Your whitening appointment begins with a nourishing lip oil application for added comfort, followed by a personalized shade consultation to discuss your goals, expectations, and the safest path to achieving your best result under the guidance of dental professionals. The proprietary whitening gel is activated by heat technology that significantly accelerates performance, and the shorter sessions prevent dehydration of the teeth so there is little to no sensitivity and the whitening effect lasts longer than other harsher whitening treatments.</p>
<p>Included with your appointment is a professional-grade, one-week enamel treatment delivering up to three months of stain protection and enamel support.</p>
<p>Perfect for first time whitening clients, sensitivity-prone clients, and those wanting quick brightening results.</p>
<p><em>Clients are recommended to have a dental cleaning at least 3–6 months prior to whitening.</em></p>
<p><em>If you also want to add a tooth gem there must be a 2 week wait after whitening for proper adhesion of gem.</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93260957',
  },

  'coastal-whitening': {
    name: 'Coastal Express Glow Whitening',
    price: '$150.00',
    duration: '30 minutes',
    images: [
      'images/ExpressGlow2.png',
    ],
    description: `<p>A quick, gentle whitening refresh designed to brighten your smile in just 30 minutes. This express treatment uses professional carbamide peroxide gel with LED light to lift surface stains and support a brighter smile with lower sensitivity. Results of up to 5 shades brighter are possible, and because carbamide peroxide gradually breaks down into hydrogen peroxide, your whitening will continue to develop over the following few days after your appointment. Perfect for touch-ups, maintenance or first-time whitening.</p>
<p>Includes: Shade consultation, Lip oil, 20–30 minute whitening treatment, and post-treatment comfort care.</p>`,
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
<p>Includes 2 professional whitening treatments (1.5 hrs)<br><em>2 Free enamel and stain protector</em><br><em>2 Free on-the-go whitening pens</em></p>
<p><em>Please contact for larger parties and mobile inquiries. We are available to come to you!</em></p>`,
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
    name: 'Serenity Session Upgrade',
    price: '$25.00',
    images: [
      'images/serenitysession.png',
    ],
    description: 'Add noise cancelling bluetooth headphones, a cozy blanket, aromatherapy, and a cooling jade eye mask to your service.',
    note: 'Add-on during booking.',
  },

  'glo-pen': {
    name: 'GLO Whitening Pen',
    price: '$40.00',
    images: [
      'images/GloPen.png',
    ],
    description: `<p>Glo whitening pen is the most convenient, mess-free way to whiten without sensitivity. Clinically proven to whiten after just one application–formulated with 12% hydrogen peroxide and infused with plant-based antimicrobials and antioxidants.</p>`,
    note: 'Choose as an add-on to a service when booking.',
  },

  'serum': {
    name: 'Stain Protection Serum',
    price: '$80.00',
    images: [
      'images/StainSerum.png',
    ],
    description: `<p>Up to 3 Months of Stain Protection – Helps protect whitening results from everyday staining.</p>
<p>• Biomimetic Enamel Remineralization – Powered by nano-hydroxyapatite to help repair and strengthen enamel.</p>
<p>• Post-Treatment Enamel Recovery – Supports enamel restoration and strengthening following whitening or aligner therapy.</p>
<p>• Restoration-Safe, Fluoride-Free Formula – Vegan and cruelty-free; safe for veneers, crowns, and bridges.</p>`,
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
