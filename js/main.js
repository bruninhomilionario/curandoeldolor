document.getElementById('year').textContent = new Date().getFullYear();

const promoTimerEls = document.querySelectorAll('.promo-timer');
let promoSeconds = 15 * 60;

function updatePromoTimer() {
  const minutes = Math.floor(promoSeconds / 60);
  const seconds = promoSeconds % 60;
  const text = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  promoTimerEls.forEach((el) => { el.textContent = text; });
  if (promoSeconds <= 0) {
    promoSeconds = 15 * 60;
  } else {
    promoSeconds -= 1;
  }
}

updatePromoTimer();
setInterval(updatePromoTimer, 1000);

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

const depoimentosGrid = document.getElementById('depoimentosGrid');

function renderDepoimentoCard(item) {
  const card = document.createElement('article');
  card.className = 'depoimento-grid-card reveal';
  const stars = '★★★★★';
  card.innerHTML = `
    <div class="depoimento-stars">${stars}</div>
    <p class="depoimento-quote">"${item.quote}"</p>
    <span class="depoimento-name">${item.nome}<span class="depoimento-role">${item.papel}</span></span>
  `;
  return card;
}

function renderDepoimentos() {
  depoimentosGrid.innerHTML = '';
  depoimentos.forEach((item) => {
    depoimentosGrid.appendChild(renderDepoimentoCard(item));
  });
}

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
