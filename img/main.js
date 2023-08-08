const relogio = document.querySelector('.relogio');

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');


iniciar.addEventListener('click', function(event) {
  relogio.innerHTML = 'Cliquei no Iniciar!'


});

pausar.addEventListener('click', function(event) {
  relogio.computedStyleMap.color = 'red'


});

zerar.addEventListener('click', function(event) {
  alert('Cliquei no zerar')


});