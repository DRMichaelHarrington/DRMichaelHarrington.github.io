'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const smallScreen = window.matchMedia('(max-width: 850px)');
function closeMenu() {
  if (!toggle || !navigation) return;
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const opening = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(opening));
    navigation.classList.toggle('open', opening);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  smallScreen.addEventListener('change', closeMenu);
}
// Optional photographs: use a local JPG when present, otherwise retain the SVG.
// Missing optional files are expected before photographs are uploaded.
document.querySelectorAll('img[data-replace]').forEach(image => {
  const photograph = new Image();
  photograph.onload = () => {
    image.src = photograph.src;
    image.classList.add('has-photo');
    image.alt = image.alt.replace('geometric editorial illustration', 'editorial image');
    if (image.dataset.replace.endsWith('/portrait.jpg')) image.alt = 'Michael Harrington';
    if (image.dataset.replace.endsWith('/about.jpg')) image.alt = 'Michael Harrington profile photograph';
  };
  photograph.onerror = () => { /* The included illustration stays visible. */ };
  photograph.src = image.dataset.replace;
});
