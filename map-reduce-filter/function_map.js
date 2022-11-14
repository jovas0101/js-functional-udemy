/*
1) multiplicar o dobro de um array e dividir por 2 retorna o valor;

2) mostra a turma vencedora que obtem pontos >= 9.0 com false ou tre em um array

// 3) primeira letra do array
*/

// 1)

const numeros = [2, 3, 4, 5, 6, 8];

const dobro = numeros.map((el) => {
  return (el * 2) / 2;
});

console.log(dobro);

// 2)

var vencedores = [
  {
    turma: "Vermelha",
    pontos: 8.9,
  },
  {
    turma: "Roxo",
    pontos: 9.6,
  },
  {
    turma: "Azul",
    pontos: 6.7,
  },
];

const turmaVencedora = vencedores.map((el, indice) => {
  return {
    finalista: ` RESULTADO: ${el.pontos >= 9}`,
    numero: indice + 1,
  };
});

console.log(turmaVencedora);

// 3) primeira letra do array

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const letra = (texto) => texto[0];

const primeiraLetra = nomes.map(letra);
console.log(primeiraLetra);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const calcPreco = carrinho.map((el) => {
  return el.nome;
});

console.log(calcPreco);

const calcProduto = carrinho.map((el) => {
  return el.qtde * el.preco;
});

const nome = (item) => item.nome;
console.log(carrinho.map(nome));

console.log(calcProduto);

const getTotal = (item) => item.qtde * item.preco;

console.log(carrinho.map(getTotal));
