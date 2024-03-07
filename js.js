document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.carousel-wrapper');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function startCarousel() {
    setInterval(nextSlide, 3000); // Mude o intervalo conforme necessário (em milissegundos)
  }

  window.addEventListener('resize', function () {
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
  startCarousel();
});

let prevScrollPos = window.pageYOffset;
const middleClass = document.querySelector('.cabecalho');

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    middleClass.style.top = '0';
  } else {
    middleClass.style.top = '-100%'; // Move para o topo (oculta) ao rolar para baixo
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola diretamente para o topo
  }

  prevScrollPos = currentScrollPos;
}


let dropDown = document.querySelector('.dropdown');

window.onscroll = function() {
  if (window.pageYOffset > 50) { // Adapte conforme necessário
    dropDown.classList.add('scrolled');
  } else {
    dropDown.classList.remove('scrolled');
  }
}