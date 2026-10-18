(function () {
  'use strict';

  var lightbox = document.getElementById('guideLightbox');
  var image = lightbox.querySelector('img');
  var closeButton = lightbox.querySelector('.guide-lightbox-close');
  var lastTrigger = null;

  function openLightbox(button) {
    lastTrigger = button;
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function closeLightbox() {
    if (lightbox.hidden) return;
    lightbox.hidden = true;
    image.src = '';
    document.body.classList.remove('lightbox-open');
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.guide-image-open').forEach(function (button) {
    button.addEventListener('click', function () { openLightbox(button); });
  });

  closeButton.addEventListener('click', closeLightbox);
  image.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeLightbox();
  });
}());
