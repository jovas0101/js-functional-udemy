/*
1) criar uma função chamada somar, que recebe (3)(4)(5)

2) criar uma função chamada calcular, que recebe como parametro (3)(7)(fn)
*/

// desafio 1

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = somar(3)(4)(13);
console.log(result);

// desafio 2

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function somarNew(a, b) {
  return a + b;
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);
const r3 = calcular(10)(5)(somarNew);

console.log(r1, r2, r3);
