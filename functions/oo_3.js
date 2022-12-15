function Produto(nome, preco, desc = 0.5) {
  this.nome = nome;
  this.preco = preco;
  this._desc = desc;

  this.precoFinal = function () {
    return this.preco * (1 - this._desc);
  };
}

Produto.prototype.productNew = function () {
  console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`);
};

const product = new Produto("Maça", 20.0);

console.log(product.nome);

product.productNew();

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return this._desc;
  },
  set: function (newDesc) {
    newDesc >= 0 && newDesc <= 1 ? (this._desc = newDesc) : undefined;
  },
});

Object.defineProperty(Produto.prototype, "descString", {
  get: function () {
    return `${this._desc * 1000}%`;
  },
});

console.log(product.descString);

product.desc = 0.99