const numbers = [2, 4, 5, 6, 9];

const result = (item, i, array) => item * 2 + i + array.length;

console.log(numbers.map(result));

// propio map!

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

Array.prototype.myMap = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    const result = fn(this[i], i, this);
    mapped.push(result);
  }

  return mapped;
};

const getTotal = (item) => item.qtde * item.preco;
const total = carrinho.myMap(getTotal);

console.log(total);
