// ── ANIMACIÓN SCROLL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

// ── FRASES MOTIVACIONALES ──
const frases = [
  { texto: "No se trata de cómo te sentís. Se trata de lo que hacés cuando no te sentís bien.", autor: "Mentalidad gym" },
  { texto: "El dolor que sentís hoy es la fuerza que vas a sentir mañana.", autor: "Anónimo" },
  { texto: "No tenés que ser extremo. Solo tenés que ser consistente.", autor: "Anónimo" },
  { texto: "Cada rep que hacés cuando no querés es la que te cambia.", autor: "Mentalidad gym" },
  { texto: "La disciplina es elegir entre lo que querés ahora y lo que querés más.", autor: "Abraham Lincoln" },
  { texto: "El cuerpo logra lo que la mente cree.", autor: "Anónimo" },
  { texto: "No pares cuando estés cansado. Parate cuando hayas terminado.", autor: "Anónimo" },
  { texto: "Hace un año deseabas tener lo que tenés ahora. Seguí.", autor: "Mentalidad gym" },
  { texto: "La fuerza no viene de lo que podés hacer. Viene de superar lo que pensabas que no podías.", autor: "Rikki Rogers" },
  { texto: "Entrenás solo una hora al día. Las otras 23 te hacen o te rompen.", autor: "Mentalidad gym" },
  { texto: "El progreso es progreso, sin importar lo pequeño que sea.", autor: "Anónimo" },
  { texto: "No se trata de ser mejor que los demás. Se trata de ser mejor que ayer.", autor: "Katsuro Tsuku" },
  { texto: "El que dice que algo es imposible no debería interrumpir al que lo está haciendo.", autor: "Proverbio chino" },
  { texto: "Ganar no siempre es un trofeo. A veces es llegar cuando no querías.", autor: "Mentalidad gym" },
  { texto: "Empezá donde estás. Usá lo que tenés. Hacé lo que podés.", autor: "Arthur Ashe" },
  { texto: "El cuerpo que tenés en un año depende de lo que hacés hoy.", autor: "Anónimo" },
  { texto: "No buscás motivación. Construís hábitos.", autor: "Mentalidad gym" },
  { texto: "Cada entrenamiento es un depósito en tu cuenta de salud.", autor: "Anónimo" },
  { texto: "La única sesión mala es la que no hiciste.", autor: "Mentalidad gym" },
  { texto: "Sufrir en el entrenamiento es opcional. Arrepentirte de no entrenar también.", autor: "Mentalidad gym" },
];

// Cambia por día del año — mismo día siempre muestra la misma frase
const diaDelAnio = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
const frase = frases[diaDelAnio % frases.length];

const motText = document.querySelector('.mot-text');
const motAuthor = document.querySelector('.mot-author');

if (motText) motText.textContent = frase.texto;
if (motAuthor) motAuthor.textContent = `— ${frase.autor}`;

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg.scope))
      .catch(err => console.log('Error SW:', err));
  });
}