class Carrinho {
  constructor() {
    this.itens = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  // Add item to array
  adiciona(item) {
    this.itens.push(item);
  }

  // Set a value to this.frete
  adicionaFrete(valor) {
    this.frete = valor;
  }

  // Accumulates total item price from item's method to 0 and add it to this.frete
  calculaTotal() {
    this.subtotal = this.itens.reduce(
      (acum, item) => acum + item.pegaValorTotalItem(),
      0
    );
    return this.subtotal + this.frete;
  }

  // calls this.calculaTotal and returns an object with needed values
  finalizaCompra() {
    if (this.itens.length === 0) {
      throw new Error('Carrinho de compras vazio');
    }

    this.total = this.calculaTotal();

    return {
      subtotal: this.subtotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

export default Carrinho;
