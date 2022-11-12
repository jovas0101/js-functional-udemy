// Function Declaration

function bomDia() {
  console.log("Bom dia!");
}

bomDia();

// Function Expression

const boaTarde = function () {
  console.log("Boa tarde!");
};

boaTarde();

function somar(a, b = 0) {
  return a + b;
}

const result = somar(23, 23, 90);
const resultNew = somar(23);

console.log(result);
console.log(resultNew);
