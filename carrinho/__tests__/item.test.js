// Import items to be used by the tests
import Item from '../item';

describe('Testes da classe Item', () => {
  it('Tem 3 campos: nome, valor e quantidade', () => {
    const item = new Item('banana', 1, 10);

    expect(item.nome).toBe('banana');
    expect(item.valor).toBe(1);
    expect(item.quantidade).toBe(10);
  });

  it('Retorna o valor total do item (quantidade * valor)', () => {
    const item = new Item('banana', 0.1, 3);
    const expected = 0.3;

    // We'll get 0.30000000000000004, a floating-point, that's why toBeCloseTo is a better fit
    expect(item.pegaValorTotalItem()).toBeCloseTo(expected);
  });
});
