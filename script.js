const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#mainNav');
const yearEl = document.querySelector('#year');

if (yearEl) yearEl.textContent = new Date().getFullYear();

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const counters = document.querySelectorAll('[data-counter]');
const animateCounter = (element) => {
  const target = Number(element.dataset.counter) || 0;
  const duration = 900;
  const startTime = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = value.toLocaleString('en-US');
    if (progress < 1) requestAnimationFrame(tick);
    else element.textContent = target.toLocaleString('en-US');
  };

  requestAnimationFrame(tick);
};

if ('IntersectionObserver' in window && counters.length > 0) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
} else {
  counters.forEach((counter) => {
    counter.textContent = Number(counter.dataset.counter).toLocaleString('en-US');
  });
}
