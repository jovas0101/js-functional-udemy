function gerarNumeroEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

function gerarAleatorios() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 300),
    gerarNumeroEntre(1, 60, 200),
    gerarNumeroEntre(1, 60, 300),
    gerarNumeroEntre(1, 60, 8000),
    gerarNumeroEntre(1, 60, 200),
  ]);
}


gerarAleatorios()
.then((numeros) => console.log(numeros))
.then(() => console.log(numeros))