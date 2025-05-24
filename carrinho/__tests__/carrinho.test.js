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
});
