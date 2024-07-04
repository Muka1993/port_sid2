window.addEventListener('scroll', function(){
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

  function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  }


// CAROUSEL
const carousel = document.getElementById("carousel"),
content = document.getElementById("content"),
next = document.getElementById("next"),
prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-width, 0);
  if (carousel.scrollLeft - width <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

let btnEnviar = document.querySelector('#enviar');

btnEnviar.addEventListener('click', function(){
  window.alert('Mensagem enviada com sucesso!');
  btnEnviar.preventDefaul();
});

let carding = document.querySelector('.servicesBx');

carding.addEventListener('click', function(){
  if(carding.style.transform == 'scale(1.05)'){
  carding.style.transform = 'scale(1)';
  carding.style.background = 'red';
  }else{
    carding.style.transform = 'scale(1.05)';
    carding.style.background = 'blue';

  }
}
);