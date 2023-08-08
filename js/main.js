const relogio = document.querySelector(".relogio");
/*
const iniciar = document.querySelector('.relogio');
const relogio = document.querySelector('.relogio');
const relogio = document.querySelector('.relogio');*/

const data = new Date(0, 0, 0);

let hora = data.getHours();
let minuto = data.getMinutes();
let segundo = data.getSeconds();

console.log(hora, minuto, segundo);

data.toLocaleTimeString("pt-BR", {
  hour12: false,
  timeZone: "GMT",
  timeZoneName: "short",
});

document.querySelector(".iniciar").disabled = false;
document.querySelector(".pausar").disabled = true;
document.querySelector(".zerar").disabled = true;

function zeroEsquerda(valor) {
  if (valor < 10) {
    return "0" + valor;
  }
  return valor;
}

function formataRelogio() {
  const relogioFormatadado = `${zeroEsquerda(hora)}:${zeroEsquerda(
    minuto
  )}:${zeroEsquerda(segundo)}`;
  return relogioFormatadado;
}

let intervaloRelogio;

document.addEventListener("click", (e) => {
  const element = e.target;
  console.log(element);

  // INICIAR
  if (element.classList.contains("iniciar")) {
    intervaloRelogio = setInterval(() => {
      segundo++;
      relogio.innerHTML = formataRelogio();
    }, 1000);
    relogio.style.color = "black";

    document.querySelector(".iniciar").disabled = true;
    document.querySelector(".pausar").disabled = false;
    document.querySelector(".zerar").disabled = false;
  }

  // PAUSAR
  if (element.classList.contains("pausar")) {
    clearInterval(intervaloRelogio);
    relogio.style.color = "red";

    document.querySelector(".iniciar").disabled = false;
    document.querySelector(".pausar").disabled = true;
    document.querySelector(".zerar").disabled = false;
  }

  // ZERAR
  if (element.classList.contains("zerar")) {
    clearInterval(intervaloRelogio);
    hora = 0;
    minuto = 0;
    segundo = 0;
    relogio.innerHTML = formataRelogio();
    relogio.style.color = "blue";

    document.querySelector(".iniciar").disabled = false;
    document.querySelector(".pausar").disabled = true;
    document.querySelector(".zerar").disabled = true;
  }
});
