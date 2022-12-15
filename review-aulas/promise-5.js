function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um errro!");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("Testando ....", 0.5)
.then((v) => console.log(`Valor: ${v}`))
.catch(err => console.log(`Err: ${err}`))
