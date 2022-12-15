// mock - simula depêndencia externa!

/*
Função Pura valor previsivel mais fácil de controlar
*/

let qtdeExecucao = 0;

function somar(a, b) {
  qtdeExecucao++; // efeitos colaterais observáveis
  return a + b;
}

console.log(somar(90, 90));
console.log(qtdeExecucao);
console.log(somar(90, 90));
console.log(qtdeExecucao);