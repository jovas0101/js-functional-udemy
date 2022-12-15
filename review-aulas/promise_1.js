let p = new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});


const primeiroElemento = (array) => array[0];

const primeiraLetra = (primeiro) => primeiro[0];

const minusculaLtra = (letra) => letra.toLowerCase();

p.then(primeiroElemento)
  .then(primeiraLetra)
  .then(minusculaLtra)
  .then(console.log);
