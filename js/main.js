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

const depoimentos = [
  {
    nome: 'Ana P.',
    papel: 'Alivió su dolor lumbar',
    quote: 'Desde que empecé a hacer los ejercicios de la guía lumbar todos los días, mi dolor de espalda disminuyó muchísimo.',
  },
  {
    nome: 'Carlos M.',
    papel: 'Cliente de la Guía Completa',
    quote: 'La guía completa se volvió parte de mi rutina. Alivio casi inmediato después de un día agotador.',
  },
  {
    nome: 'Juliana R.',
    papel: 'Alivió su dolor de rodilla',
    quote: 'Fácil de seguir y realmente ayuda con el dolor de rodilla en el día a día.',
  },
  {
    nome: 'Roberto S.',
    papel: 'Recuperó el sueño',
    quote: 'Después de meses sin dormir bien por el dolor, finalmente logro pasar toda la noche sin despertarme.',
  },
  {
    nome: 'Camila F.',
    papel: 'Volvió a jugar con sus hijos',
    quote: 'Había dejado de sentarme en el suelo con mi hijo por el dolor de rodilla. Hoy ya ni lo pienso dos veces.',
  },
  {
    nome: 'Fernando T.',
    papel: 'Menos tensión en el trabajo desde casa',
    quote: 'Los ejercicios de la guía lumbar cambiaron mi rutina de trabajo. Siento mucha menos tensión en la espalda al final del día.',
  },
  {
    nome: 'Patrícia L.',
    papel: 'Más energía en el día a día',
    quote: 'No esperaba un resultado tan rápido. En pocos días ya sentía menos dolor para hacer tareas simples en casa.',
  },
];

const depoimentosTrack = document.getElementById('depoimentosTrack');
let depoimentoIndex = 0;

function renderDepoimentoSlide(item, position) {
  const slide = document.createElement('article');
  slide.className = `depoimento-slide depoimento-slide--${position}`;
  slide.innerHTML = `
    <p class="depoimento-quote">"${item.quote}"</p>
    <div class="depoimento-person">
      <span class="depoimento-avatar">${item.nome.charAt(0)}</span>
      <div class="depoimento-name-wrap">
        <span class="depoimento-name">${item.nome}</span>
        <span class="depoimento-role">${item.papel}</span>
      </div>
    </div>
  `;
  return slide;
}

function renderDepoimentos() {
  const total = depoimentos.length;
  const leftIndex = (depoimentoIndex - 1 + total) % total;
  const rightIndex = (depoimentoIndex + 1) % total;

  depoimentosTrack.innerHTML = '';
  depoimentosTrack.appendChild(renderDepoimentoSlide(depoimentos[leftIndex], 'side'));
  depoimentosTrack.appendChild(renderDepoimentoSlide(depoimentos[depoimentoIndex], 'center'));
  depoimentosTrack.appendChild(renderDepoimentoSlide(depoimentos[rightIndex], 'side'));
}

document.getElementById('depoNext').addEventListener('click', () => {
  depoimentoIndex = (depoimentoIndex + 1) % depoimentos.length;
  renderDepoimentos();
});

document.getElementById('depoPrev').addEventListener('click', () => {
  depoimentoIndex = (depoimentoIndex - 1 + depoimentos.length) % depoimentos.length;
  renderDepoimentos();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    depoimentoIndex = (depoimentoIndex + 1) % depoimentos.length;
    renderDepoimentos();
  } else if (e.key === 'ArrowLeft') {
    depoimentoIndex = (depoimentoIndex - 1 + depoimentos.length) % depoimentos.length;
    renderDepoimentos();
  }
});

renderDepoimentos();

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
