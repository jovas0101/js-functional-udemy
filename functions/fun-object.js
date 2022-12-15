/*
 Em JavaScript, os objetos fornecem uma maneira para armazenarmos, manipularmos, e enviarmos dados pela rede.

 !! Pense nos objetos em JavaScript como uma coleção de pares 'chave:valor'.
*/

const pessoa = new Object();

pessoa.nome = "John";
pessoa.sobrenome = "Master";

console.log(pessoa);

const Persona = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

const persona = new Persona("John", "Master");

console.log(persona);

// Object create

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My nams is ${this.name}. Am I humas? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "John";
me.isHuman = true;

me.printIntroduction();
