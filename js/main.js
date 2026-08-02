document.getElementById('year').textContent = new Date().getFullYear();

const promoTimerEl = document.getElementById('promoTimer');
let promoSeconds = 15 * 60;

function updatePromoTimer() {
  const minutes = Math.floor(promoSeconds / 60);
  const seconds = promoSeconds % 60;
  promoTimerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (promoSeconds <= 0) {
    promoSeconds = 15 * 60;
  } else {
    promoSeconds -= 1;
  }
}

updatePromoTimer();
setInterval(updatePromoTimer, 1000);

const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => observer.observe(el));
