// Voyages Loisirs — interactions de la page d'accueil

(function () {
  'use strict';

  // --- Header condensé au scroll ---
  var header = document.getElementById('header');
  var onScroll = function () {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Apparition au scroll (progressive enhancement :
  //     sans IntersectionObserver, tout reste visible) ---
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('js-reveal');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Filet de sécurité images : si une photo ne charge pas,
  //     on bascule sur la photo de secours indiquée dans data-fallback ---
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    img.addEventListener('error', function () {
      var fallback = img.getAttribute('data-fallback');
      if (fallback && img.src !== fallback) {
        img.src = fallback;
        img.removeAttribute('data-fallback');
      }
    });
    // l'erreur a pu survenir avant l'installation de l'écouteur
    if (img.complete && img.naturalWidth === 0) {
      img.src = img.getAttribute('data-fallback');
      img.removeAttribute('data-fallback');
    }
  });

  // --- Carrousel des destinations (flèches précédent / suivant) ---
  var track = document.getElementById('dest-track');
  if (track) {
    var slider = track.closest('.slider');
    var prev = slider.querySelector('.slider__arrow--prev');
    var next = slider.querySelector('.slider__arrow--next');

    var step = function () {
      var card = track.querySelector('.card');
      if (!card) return track.clientWidth;
      var gap = parseInt(getComputedStyle(track).columnGap || '34', 10) || 34;
      return card.offsetWidth + gap;
    };

    var updateArrows = function () {
      var maxScroll = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= maxScroll;
    };

    if (prev) prev.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    if (next) next.addEventListener('click', function () {
      track.scrollBy({ left: step(), behavior: 'smooth' });
    });
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();
  }

  // --- Fenêtre « Être rappelé » ---
  var modal = document.getElementById('callback-modal');
  if (modal) {
    var openModal = function (e) {
      if (e) e.preventDefault();
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };
    var closeModal = function () {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };
    document.querySelectorAll('.js-callback').forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });
    modal.querySelectorAll('[data-close]').forEach(function (x) {
      x.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
    var cbForm = document.getElementById('callback-form');
    if (cbForm) {
      cbForm.addEventListener('submit', function (e) {
        e.preventDefault();
        cbForm.style.display = 'none';
        document.getElementById('callback-done').hidden = false;
      });
    }
  }

  // --- Newsletter : confirmation locale (à brancher sur un vrai service d'emailing) ---
  var form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('newsletter-submit').textContent = 'Merci ✓';
    });
  }
})();
