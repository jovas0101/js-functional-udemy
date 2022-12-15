// callback hell

// setTimeout(() => {
//   console.log("Exec callback! 1");

//   setTimeout(() => {
//     console.log("Exec callback! 2");

//     setTimeout(() => {
//       console.log("Exec callback! 3");
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperrar(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("exec promise! 1");
      resolve();
    }, tempo);
  });
}

// esperrar(9000).then((texto) => console.log(texto));

esperrar()
  .then(() => esperrar())
  .then(esperrar)
