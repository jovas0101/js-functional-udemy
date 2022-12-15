/*
a imutabilidade, prega que nenhum dado/estado deve ser alterado, e sim evoluído e transformado
*/

let soma = function (a, b) {
  a = a + b;

  console.log(`soma é A = ${a}`);
  return a;
};

let a = 2;
let b = 4;

let c = soma(a, b);

console.log(`A = ${a}`);
console.log(`B = ${b}`);
console.log(`c = ${c}`);
