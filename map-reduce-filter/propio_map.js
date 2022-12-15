// como funciona o map internamente!

const compra = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

Array.prototype.myMap = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }

  return mapped;
};

const getNome = (item) => item.nome;
console.log(compra.myMap(getNome));

const getCalc = (item) => item.qtde * item.preco;
console.log(compra.myMap(getCalc));

Array.prototype.myFilter = function (fn) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
        novoArray.push(this[i])
    }
  }

  return novoArray;
};

// if (fn(this[i], i, this)) {
//     filter.push();
//   }