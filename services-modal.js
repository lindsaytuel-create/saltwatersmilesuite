const SERVICES = {
  'single-gem': {
    name: 'Single Tooth Gem',
    price: '$40.00',
    images: [
      'images/SingleGem.png',
    ],
    description: 'Add a little sparkle to your smile with luxury tooth gems applied in a safe, non-invasive cosmetic service. Create a custom look that\'s subtle, bold, classy, or playful! Tooth gems are painless, enamel-safe when properly applied, and can last for 6+ months with good care. Whether you want a tiny shimmer or a statement smile, we\'re here to make your vision shine.',
    colorNote: 'Various colors available.',
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=92970419',
  },

  'butterfly-gem': {
    name: 'Butterfly Tooth Gem',
    price: 'from $50.00',
    images: [
      'images/ButterflyGem.png',
      'images/Butterfly2.jpeg',
    ],
    description: 'Butterfly shaped gem in select colors for a special look! A delicate, elegant touch that turns heads and expresses your unique personality.',
    colorNote: 'Colors: Pink, Purple, Diamond',
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=92984919',
  },

  'specialty-gems': {
    name: 'Specialty Tooth Gems',
    price: '$60.00 & up',
    images: [
      'images/MicroGems.jpeg',
      'images/SpecialtyGem.png',
      'images/Zodiac2.jpeg',
      'images/GemParty2.jpeg',
    ],
    description: 'Stand out with one-of-a-kind specialty gems including hearts, stars, flowers, and more. These premium gems are applied with the same safe, non-invasive technique and are designed to make your smile truly unforgettable.',
    colorNote: 'Various styles available. Browse our selection at your appointment, or contact us in advance to inquire about a specific style.',
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93273347',
  },

  'gem-removal': {
    name: 'Tooth Gem Removal',
    price: '$20.00',
    images: [
      'images/toothgemremoval.png',
    ],
    description: 'Safely remove existing tooth gems. This service includes gentle removal of the gem and adhesive, followed by polishing to leave the tooth smooth, clean, and natural-looking. Perfect for changing styles, replacing old gems, or returning to a gem-free smile. Quick, painless, and non-invasive.',
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93260550',
  },

  'gem-party': {
    name: 'Gem Party',
    price: '$300.00',
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
    images: [
      'images/Signature2.jpeg',
    ],
    description: `<p>Your whitening appointment begins with a nourishing lip oil application for added comfort, followed by a personalized shade consultation to discuss your goals, expectations, and the safest path to achieving your best result under the guidance of dental professionals. The proprietary whitening gel is activated by heat technology that significantly accelerates performance, and the shorter sessions prevent dehydration of the teeth so there is little to no sensitivity and the whitening effect lasts longer than other harsher whitening treatments.</p>
<p>Included with your appointment is a professional-grade, one-week enamel treatment delivering up to three months of stain protection and enamel support. Powered by nano-hydroxyapatite, this serum can help remineralize and strengthen enamel while preventing everyday stains.</p>
<p><em>Clients are recommended to have a dental cleaning at least 3–6 months prior to whitening.</em></p>
<p><em>If you also want to add a tooth gem there must be a 2 week wait after whitening for proper adhesion of gem.</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93260957',
  },

  'coastal-whitening': {
    name: 'Coastal Express Glow Whitening',
    price: '$175.00',
    images: [
      'images/ExpressGlow2.png',
    ],
    description: `<p>A quick, gentle whitening refresh designed to brighten your smile in just 30 minutes. This express treatment uses professional carbamide peroxide gel with LED light to lift surface stains and support a brighter smile with lower sensitivity. Carbamide peroxide gradually breaks down into hydrogen peroxide, which means your results can continue to develop over the next few days after your appointment. Perfect for touch-ups, maintenance or first-time whitening.</p>
<p>Includes: Shade consultation, Lip oil, 20–30 minute whitening treatment, and post-treatment comfort care.</p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93261896',
  },

  'wedding-package': {
    name: 'Glow-Up Wedding Package',
    price: '$600.00',
    images: [
      'images/WeddingPackage.png',
    ],
    description: `<p>Getting ready to say "I do"? Now offering a Professional grade whitening package with free stain protector and whitening pen.</p>
<p>2 people - $600</p>
<p>Includes 2 professional whitening treatments (1.5 hrs)<br><em>2 Free enamel and stain protector</em><br><em>2 Free on-the-go whitening pens</em></p>
<p><em>Please contact for larger parties and mobile inquiries. We are available to come to you!</em></p>`,
    cta: 'Book Now',
    bookingUrl: 'https://saltwatersmilesuite.as.me/?appointmentType=93262904',
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
    price: '$60.00',
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
