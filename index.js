const somaHorasExtras = (valorSalarioBase, valorHorasExtras) =>
  valorSalarioBase + valorHorasExtras;

const calculaDescontos = (valorSalarioBase, valorDescontos) =>
  valorSalarioBase - valorDescontos;

export { somaHorasExtras, calculaDescontos };
