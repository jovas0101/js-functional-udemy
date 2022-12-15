class Produto {
  constructor(nome, preco, desc = 0.15) {
    this._nome = nome;
    this.preco = preco;
    this.desc = desc;
  }

  get nome() {
    return `Produto ${this._nome}`;
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const product = new Produto("Cebola", 8.9);
product.nome = 'cebola'

console.log(product.precoFinal);

console.log(product.nome);
