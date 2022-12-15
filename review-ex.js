/*

1) Mapeie o Array buscando calcular quantidade * preço;

2) Filtre os as quantidades maiores que 3;
*/

const produtos = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

Array.prototype.MapProduct = function (fn) {
  const mapped = [];

  for (let i = 0; i < this.length; i++) {
    mapped.push(fn(this[i], i, this));
  }

  return mapped;
};

const getCalc = (item) => item.qtde * item.preco;

console.log(produtos.MapProduct(getCalc));

Array.prototype.myFilter = function (fn) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this) ? newArray.push(this[i]) : this;
  }

  return newArray;
};

const productQtdMaiorTres = (item) => item.qtde >= 3;

console.log(produtos.myFilter(productQtdMaiorTres));
