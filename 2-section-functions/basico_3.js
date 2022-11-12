// Arrow function = função anonima

const saudacao = () => console.log("Bom dia!");

saudacao();

const bomdia = (nome) => `Seu nome é ${nome}! Bom dia`;

console.log(bomdia("Luc"));

const somar = (...num) => {
  console.log(Array.isArray(num));
  let total = 0;

  for (let n of num) {
    total += n;
  }

  return total;
};

console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(somar(1, 2, 3));
console.log(somar(1, 3));

const potencia = (base) => (exp) => Math.pow(base, exp);

console.log(potencia(2)(8));

// this dentro da função

Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};

Array.prototype.primeiro = function () {
  console.log(this[0]);
};

const numeros = [1, 2, 3];
numeros.ultimo();
numeros.primeiro();
