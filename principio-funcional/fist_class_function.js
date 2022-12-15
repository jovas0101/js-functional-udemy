/*
Função é tratada como qualquer outra variável
*/

const x = 3;
const y = function (txt) {
  return `Este é o texto ${txt}`
};

console.log(y('aaaa'))

const z = () => console.log('ZZZZ!')