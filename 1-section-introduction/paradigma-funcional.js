// Declaração simples!

function dobro(x) {
  return x * 2;
}

console.log(dobro(20));

// função anonima

const dobroNew = function (x) {
  return x * 2;
};

console.log(dobroNew(20));

/*----------------------------------------------------------------------------------------------------*/

// versão do código (PROCEDURAL)

const alunos = [
  { nome: "Ana", nota: 9.5 },
  { nome: "Bia", nota: 7.3 },
  { nome: "Gil", nota: 5.8 },
  { nome: "Leo", nota: 7.6 },
  { nome: "Gui", nota: 9.1 },
  { nome: "Lia", nota: 4.9 },
  { nome: "Rui", nota: 7.0 },
];

const aprovados = [];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    aprovados.push(alunos[i]);
  }
}

console.log(aprovados);

// versão do código (FUNCIONAL)

const estaAprovado = (alunos) => alunos.nota >= 7;

const aprovadosNew = alunos.filter(estaAprovado);
console.log(aprovadosNew);
