const fs = require("fs");
const path = require("path");
/*

Como a função Callback pode ser útil?
O Callback pode ser útil em diversas situações do desenvolvimento web. Ele costuma ser mais utilizado em:

Criação de APIs;
Generalização de código;
Execução Assíncrona (solicitações HTTP, ler arquivos);
Event Listeners;
Métodos setTimeOut e setInterval.

*/

// leitura de arquivo!

// --método assincrono

fs.readFile("../2-section-functions/dados.txt", "utf-8", (_, data) => {
  return data !== "undefined" ? console.log(data) : `Arquivo nao encontrado`;
});

// utilizando o métdo callback!

const pathFile = path.join(__dirname, "../2-section-functions/dados.txt");

function returnFile(_, data) {
  return data !== "undefined" ? console.log(data) : undefined;
}

console.log("BBBBBBBBBBBBBBBBBBBBBBBInicio");
fs.readFile(pathFile, "utf-8", returnFile);
fs.readFile(pathFile, "utf-8", (_, conteudo) =>
  console.log(conteudo.toString())
);
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFim");

console.log('SYNC INICOOOOOOOOOOOOOOOOOOOOOOO')
const syncFile = fs.readFileSync(pathFile) // sync:  tempo de espera ai sim le oa rquivo
console.log(syncFile.toString())
console.log("SYNC FIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIM");