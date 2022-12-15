// my name is?? with callback

function myjob(callback) {
  return callback;
}

function whatJob(name) {
  console.log(`my job is: ${name}`);
}

myjob(whatJob("Developer"));
myjob(whatJob("Admin"));
myjob(whatJob("Desing"));

// soma com callback!

function exec(fn, a, b) {
  return fn(a, b);
}

const somarNumeros = (a, b) => console.log(a + b);
const subtrairNumeros = (a, b) => console.log(a - b);
const multiplicarNumeros = (a, b) => console.log(a * b);
const dividirNumeros = (a, b) => console.log(a / b);

exec(somarNumeros, 10, 10);
exec(subtrairNumeros, 10, -10);
exec(multiplicarNumeros, 10, 10);
exec(dividirNumeros, 10, 10);

// função chamada setInterval

const teste = setInterval(function () {
  let name = "paul";
  console.log(`My name is ${name}`);
}, 5000);
