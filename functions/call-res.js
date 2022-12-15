/*
- Padrões callback
- Objetos de configuração
- Curryins
*/

// Padrão callback!

function saudacao(callback) {
  // > [call it back = ligue de volta!]
  callback();
}

function bomdia() {
  // argumento!
  console.log("Bem vindo ao servidor. Bom dia!");
}

saudacao(bomdia);

// ----------------

const a = function () {
  console.log("World");
};

const b = function (callback) {
  console.log("Hello");

  callback();
};

b(a);

// CALLCULO COM CALLBACK!

const somar = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const mult = function (a, b) {
  return a * b;
};

const div = function (a, b) {
  return a / b;
};

const calc = function (fn, num1, num2) {
  return fn(num1, num2);
};

console.log(calc(somar, 45, 45));
console.log(calc(sub, 45, 45));
console.log(calc(mult, 45, 45));
console.log(calc(div, 45, 45));
