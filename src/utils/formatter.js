export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

export const toMoney = priceInCents => {
  if (priceInCents === undefined || priceInCents === null) return '';

  if (isNaN(Number(priceInCents))) return 'NaN';

  return formatter.format(priceInCents);
};
