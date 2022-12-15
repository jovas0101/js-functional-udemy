/*
Função pura ou impura?

! algo inderteministico
impura - pois é uma função aleatoria não tem como garantir o valor Math.random()

*/ 

function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;

  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(5,6))