const fs = require("fs");
const path = require("path");

function lerArquivo(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, "utf8", (_, data) => {
      resolve(data);
    });
  });
}

const arquive = path.join(__dirname, "../2-section-functions/dados.txt");

lerArquivo(arquive)
  .then((text) => text.split("\n"))
  .then((line) => line.join(","))
  .then((conteudo) => `o valor final é ${conteudo}`)
  .then(console.log)
