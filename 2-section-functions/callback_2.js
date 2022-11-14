const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

console.log(__dirname);

function exibirConteudo(_, data) {
  console.log(data);
}

console.log("Inicio");
fs.readFile(caminho, "utf8", exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log("Fim");

console.log("Inicio Sync");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim Sync");
