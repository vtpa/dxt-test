export function formatMoneytoReal(rawInCents: number): string {
  const rawInReal = rawInCents / 100
  return rawInReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}