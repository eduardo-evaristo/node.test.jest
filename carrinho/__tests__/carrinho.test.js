import Carrinho from '../carrinho';
import Item from '../item';

describe('Testes da classe Carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.itens).toHaveLength(0);
    // Works but the one above is more secure
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve guardar itens', () => {
    const item1 = new Item('Beterraba', 5.9, 4);
    const item2 = new Item('Feijão', 10, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    // This is a matcher for arrays
    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
    // This one as well, for asserting the length
    expect(carrinho.itens).toHaveLength(2);
  });

  it('Deve ter a propriedade total na inicialização com valor null', () => {
    const carrinho = new Carrinho();

    // This one is for objects, it checks for the property existence and optionally its value
    expect(carrinho).toHaveProperty('total', null);
  });

  it('Deve lançar um erro ao finalizar compra com carrinho vazio', () => {
    // Gotta 'encompass' the error-throwing part of the code inside a function to be tested
    function englobaFinalizaCompra() {
      const carrinho = new Carrinho();
      // This should throw an error
      carrinho.finalizaCompra();
    }

    expect(englobaFinalizaCompra).toThrow('Carrinho de compras vazio');
  });

  it('Deve adicionar um valor de frete ao carrinho', () => {
    const carrinho = new Carrinho();
    const valorFrete = 20;
    carrinho.adicionaFrete(valorFrete);

    expect(carrinho.frete).toBe(valorFrete);
  });

  // Since this function is called in finalizarCompra, the coverage test'd say this been covered
  // Even though it had not been tested, that would be a false positive
  it('Deve calcular o total do carrinho', () => {
    const item1 = new Item('Beterraba', 10, 4);
    const item2 = new Item('Feijão', 10, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(20);

    const expected = 70;
    expect(carrinho.calculaTotal()).toBe(expected);
  });

  it('Deve finalizar a compra', () => {
    const item1 = new Item('Beterraba', 10, 4);
    const item2 = new Item('Feijão', 10, 1);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(20);

    const expectedObject = { subtotal: 50, frete: 20, total: 70 };
    // If we're expecting an exact object, we should go for toStrictEqual
    expect(carrinho.finalizaCompra()).toStrictEqual(expectedObject);
  });
});
