// App Showcase: arrow-assisted horizontal scrolling + lightbox preview.
// Cards are static HTML so the strip stays usable (swipe/scroll) without JS.
(function () {
  'use strict';

  var EDGE_TOLERANCE_PX = 4;

  function updateArrows(track, prev, next) {
    var maxScroll = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= EDGE_TOLERANCE_PX;
    next.disabled = track.scrollLeft >= maxScroll - EDGE_TOLERANCE_PX;
  }

  function scrollStep(track, direction) {
    var card = track.querySelector('.shot-card');
    var step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  function initStrip(root) {
    var track = root.querySelector('.showcase-track');
    var prev = root.querySelector('.showcase-arrow.prev');
    var next = root.querySelector('.showcase-arrow.next');
    if (!track || !prev || !next) return;

    var refresh = function () { updateArrows(track, prev, next); };
    prev.addEventListener('click', function () { scrollStep(track, -1); });
    next.addEventListener('click', function () { scrollStep(track, 1); });
    track.addEventListener('scroll', refresh, { passive: true });
    window.addEventListener('resize', refresh);
    refresh();
  }

  // Caption follows the currently active language so zh/en stay consistent.
  function captionFor(card) {
    var lang = document.documentElement.lang === 'zh' ? 'zh' : 'en';
    var title = card.querySelector('.shot-title.lang-' + lang);
    return title ? title.textContent : '';
  }

  function createLightbox(box) {
    var img = box.querySelector('#lightbox-img');
    var caption = box.querySelector('#lightbox-caption');
    var closeBtn = box.querySelector('.lightbox-close');
    var lastFocus = null;

    function close() {
      if (!box.classList.contains('open')) return;
      box.classList.remove('open');
      box.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-lock');
      img.removeAttribute('src');
      if (lastFocus) lastFocus.focus();
    }

    function open(card) {
      var thumb = card.querySelector('img');
      if (!thumb) return;
      lastFocus = card;
      img.src = thumb.getAttribute('src');
      img.alt = thumb.alt;
      caption.textContent = captionFor(card);
      box.classList.add('open');
      box.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-lock');
      closeBtn.focus();
    }

    // Backdrop click closes; clicks on the image/caption themselves do not.
    box.addEventListener('click', function (event) {
      if (event.target === box) close();
    });
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') close();
    });
    return open;
  }

  function init() {
    var root = document.getElementById('showcase');
    var box = document.getElementById('lightbox');
    if (!root || !box) return;

    initStrip(root);
    var openLightbox = createLightbox(box);
    var cards = root.querySelectorAll('.shot-card');
    Array.prototype.forEach.call(cards, function (card) {
      card.addEventListener('click', function () { openLightbox(card); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
