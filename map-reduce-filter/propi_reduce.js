const compra = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

Array.prototype.myReduce = function (fn, inicial) {
  let acc = inicial;

  for (let i = 0; i < this.length; i++) {
    !acc && i === 0 ? (acc = this[i]) : (acc = fn(acc, this[i], this));
  }

  return acc;
};

const getTotal = (item) => item.qtde * item.preco;
const somar = (acc, el) => acc + el;

const totalGeral = compra.map(getTotal).reduce(somar);

console.log(totalGeral);
