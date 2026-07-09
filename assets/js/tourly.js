'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


/* Compteurs animés (bloc chiffres) */
(function () {
  const counters = document.querySelectorAll(".stat-value[data-count]");
  if (!counters.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const format = function (n, group, pad) {
    const v = Math.round(n);
    let s = group ? v.toLocaleString("fr-FR") : String(v);
    if (pad) s = s.padStart(pad, "0");
    return s;
  };

  const run = function (el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const prefix = el.dataset.prefix || "";
    const group = el.dataset.group === "1";
    const pad = parseInt(el.dataset.pad || "0", 10);
    if (reduce) { el.textContent = prefix + format(target, group, pad); return; }
    const duration = 1600;
    let start = null;
    const step = function (ts) {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = prefix + format(target * eased, group, pad);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + format(target, group, pad);
    };
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(run);
    return;
  }

  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        run(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(function (el) { obs.observe(el); });
})();


/* Apparition au scroll (fade-in / slide-up) */
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Si animations réduites ou pas d'IntersectionObserver : on laisse tout visible.
  if (reduce || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-reveal");

  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  items.forEach(function (el) { obs.observe(el); });
})();