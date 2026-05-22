document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const icon = btn.querySelector('.faq-icon');
    const isOpen = item.classList.contains('open');

    // close all others
    document.querySelectorAll('.faq-item.open').forEach(open => {
      open.classList.remove('open');
      open.querySelector('.faq-icon').textContent = '+';
      open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // toggle clicked
    if (!isOpen) {
      item.classList.add('open');
      icon.textContent = '−';
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});
