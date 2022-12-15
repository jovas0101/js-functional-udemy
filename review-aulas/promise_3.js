function gerarNumeros(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  }

  return new Promise((resolve) => {
    const aletorio = parseInt(Math.random() * (max - min + 1)) + min;
    resolve(aletorio);
  });
}

gerarNumeros(1, 60)
  .then((num) => num * 10)
  .then((numX10) => `o num foi ${numX10}`)
  .then(console.log)
