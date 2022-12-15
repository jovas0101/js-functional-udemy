const notas = [6, 5, 7, 3, 9, 10];

const getNotas = notas.filter((item) => item >= 7);
// console.log(getNotas);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
const qtdeMaiorQueZero = (item) => item.qtde >= 0;
const qtdeIgualMaiorQueZero = (item) => item.qtde > 0;
const qtdMuitoGrande = (item) => item.qtde >= 10000;

const nomesItensValidos = carrinho.filter(qtdMuitoGrande).map(getNome);

console.log(nomesItensValidos);
