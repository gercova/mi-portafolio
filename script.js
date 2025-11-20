// Mostrar/Ocultar botón de volver arriba
const botonVolver = document.getElementById('volver-arriba');

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    botonVolver.classList.add('mostrar');
  } else {
    botonVolver.classList.remove('mostrar');
  }
};

// Volver arriba al hacer clic
botonVolver.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Animación al hacer scroll
const secciones = document.querySelectorAll('.seccion, .hero, header');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

secciones.forEach(seccion => {
  observador.observe(seccion);
});

// Agregar clase CSS para efecto de animación
document.head.insertAdjacentHTML('beforeend', `
  <style>
    .seccion, .hero, header {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .seccion.visible, .hero.visible, header.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
`);

// Menú hamburguesa
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

/**
 * google-site-verification=ahWMAdxTPWMNLbKdg3iUsgzJ7brSTml_NQ79tY3SMxQ
 * google-site-verification=ahWMAdxTPWMNLbKdg3iUsgzJ7brSTml_NQ79tY3SMxQ
 */