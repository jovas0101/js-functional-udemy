// 1) - passar uma função como parametro para outra!

function acessFn() {
  console.log("Olá, você acessou está função!");
}

const executFn = function (fn) {
  if (typeof fn === "function") {
    fn();
  }
};

executFn(acessFn);

// 2) - retorna uma função apartir de outra função

function potencia(base) {
  return function (exp, a) {
    return Math.pow(base, exp);
  };
}

const potencia2 = potencia(2);
const potencia3 = potencia(3)(8);
const potencia5 = potencia(3)(8);

console.log(potencia2(2));
console.log(potencia3);
console.log(potencia5);
