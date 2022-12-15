/*
Função que opera poutra função, tomando como argumentos ou retornando-as
*/

function exec(fn, ...params) {
  return function (textInicial) {
    return `${textInicial} ${fn(...params)}!`;
  };
}

function somar(a, b) {
  return a + b;
}

function multi(a, b) {
  return a * b;
}

const r1 = exec(somar, 10, 10)('O resultado da soma é:');
const r2 = exec(multi, 10, 10)('O resultado da multiplicação é:');

console.log(r1);
console.log(r2);
