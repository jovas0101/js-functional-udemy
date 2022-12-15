function esperrar(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo);
  });
}

// esperrar(3000)
//   .then(() => console.log("executando promise!"))
//   .then(esperrar)
//   .then(() => console.log("executando promise!"))
//   .then(esperrar)
//   .then(() => console.log("executando promise!"))
//   .then(esperrar);

function retornaValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

function retornaValorRapido() {
  return 20;
}

async function executar() {
  let valor = await retornaValorRapido();

  await esperrar(100);
  console.log("Async Await 1" + valor + 1);
  await esperrar(100);
  console.log("Async Await 2" + valor + 123);
  await esperrar(100);
  console.log("Async Await 3" + valor + 10);

  return valor + 3;
}

executar().then(console.log);
