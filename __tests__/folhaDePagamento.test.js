import { somaHorasExtras, calculaDescontos } from '../index';

describe('Testes de cálculos de folha', () => {
  it('Deve retornar o salário base somado às horas extras', () => {
    const expected = 2500;
    const returned = somaHorasExtras(2200, 300);

    expect(returned).toBe(expected);
  });

  it('Deve retornar o salário base com os descontos subtraídos', () => {
    const expected = 2100;
    const returned = calculaDescontos(2500, 400);

    expect(returned).toBe(expected);
  });

  it('Deve retornar o salário líquido', () => {
    const expected = 2600;
    const salarioComDescontos = calculaDescontos(2500, 300);
    const returned = somaHorasExtras(salarioComDescontos, 400);

    expect(returned).toBe(expected);
  });
});
