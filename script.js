const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  nav.classList.toggle('is-open', open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('is-open');
}));

document.querySelectorAll('[data-image-slot]').forEach((slot) => {
  const photo = slot.querySelector('img');
  photo.addEventListener('load', () => slot.classList.add('has-image'));
  photo.addEventListener('error', () => slot.classList.remove('has-image'));
  if (photo.complete && photo.naturalWidth > 0) slot.classList.add('has-image');
});

document.querySelector('#year').textContent = new Date().getFullYear();
