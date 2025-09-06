// Funções de acessibilidade
function aumentarFonte() {
  document.body.style.fontSize = "18px";
}

function diminuirFonte() {
  document.body.style.fontSize = "14px";
}

function alternarContraste() {
  document.body.classList.toggle("contraste");
}

// Animações com ScrollReveal
ScrollReveal().reveal('.section', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: true
});
