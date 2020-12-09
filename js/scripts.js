// variaveis globais o//
const elementoRelogio = document.querySelector("#relogio");
const dataAtual = new Date();

// navegacao suave para voltar ao topo
const irParaTopo = (event) => {
  if (typeof event == "undefined") {
    let limite = 100;
    let opacidade = 1200;
    let botao = document.querySelector(".ir-topo");

    document.onscroll = () => {
      let top = document.documentElement.scrollTop;
      if (top > limite) {
        botao.classList.add("visivel");
      } else {
        botao.classList.remove("transparente");
        botao.classList.remove("visivel");
      }
      if (top > opacidade) {
        botao.classList.add("transparente");
      }
    };
  } else {
    event.preventDefault();
  }

  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

// relogio
const relogio = (elemento, data) => {
  data.setSeconds(data.getSeconds() + 1);
  elemento.innerText = data.toLocaleDateString("pt-br", {
    year: "numeric",
    month: "long" || "short" || "numeric",
    day: "numeric" || "2-digit",
    hour: "numeric" || "2-digit",
    minute: "numeric" || "2-digit",
    second: "numeric" || "2-digit",
  });
};

relogio(elementoRelogio, dataAtual)

$(function () {
  //  Bootstrap
  $('[data-toggle="tooltip"]').tooltip();

  // Iniciando funcoes
  irParaTopo();
  setInterval(() => relogio(elementoRelogio, dataAtual), 1000);
});
