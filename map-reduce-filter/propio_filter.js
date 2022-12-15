const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

Array.prototype.myFilter = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this) ? newArray.push(this[i]) : this;
  }

  return newArray;
};

const getCalc = (item) => item.preco >= 1000;
console.log(carrinho.myFilter(getCalc));
