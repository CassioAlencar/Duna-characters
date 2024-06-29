const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

function mostrarCartao(indice) {
  cartoes.forEach((cartao, i) => {
    cartao.classList.toggle("selecionado", i === indice);
  });
}

btnAvancar.addEventListener("click", () => {
  cartaoAtual = (cartaoAtual + 1) % cartoes.length; // Lógica de looping
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", () => {
  cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length; // Lógica de looping
  mostrarCartao(cartaoAtual);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    cartaoAtual = (cartaoAtual - 1 + cartoes.length) % cartoes.length; // Lógica de looping
    mostrarCartao(cartaoAtual);
  } else if (event.key === "ArrowRight") {
    cartaoAtual = (cartaoAtual + 1) % cartoes.length; // Lógica de looping
    mostrarCartao(cartaoAtual);
  }
});

// Mostrar o primeiro cartão inicialmente
mostrarCartao(cartaoAtual);
