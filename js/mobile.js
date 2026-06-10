function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('navMenuMovil');
  if (!hamburger || !menu) return;
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function irA(url) {
  document.body.style.overflow = '';
  location.href = url;
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const menu      = document.getElementById('navMenuMovil');
    const hamburger = document.getElementById('hamburger');
    if (menu?.classList.contains('open')) {
      menu.classList.remove('open');
      hamburger?.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
});

function abrirFiltros() {
  document.querySelector('.filtros-sidebar')?.classList.add('open');
  document.querySelector('.ejercicios-sidebar')?.classList.add('open');
  document.getElementById('filtrosOverlay')?.classList.add('open');
  document.getElementById('ejerciciosOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function cerrarFiltros() {
  document.querySelector('.filtros-sidebar')?.classList.remove('open');
  document.querySelector('.ejercicios-sidebar')?.classList.remove('open');
  document.getElementById('filtrosOverlay')?.classList.remove('open');
  document.getElementById('ejerciciosOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}