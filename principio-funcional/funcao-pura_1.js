/* Função pura é uma função em que o valor de retorno é determinado APENAS por seus valores de entrada, sem efeitos colaterais aobserváveis */

// const PI = 3.14;

/* Função Pura ou impura? 

impura - pois o valor da constante está fora da função e não no parametro de entrada!
*/

function areCiruclo(raio) {
  return Math.pow(raio, 2) * Math.PI; // estável
}

console.log(areCiruclo(10));

// Função Pura
function areCirucloPura(raio, pi) {
    return Math.pow(raio, 2) * pi;
}

console.log(areCirucloPura(10, 3.14));
console.log(areCirucloPura(10, Math.PI));