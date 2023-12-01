export const cleanObject = (object: { [key: string]: unknown }, desiredFields: string[]) => {
  return Object.assign({}, ...desiredFields.map((field: string) => (field in object ? { field: object[field] } : {})));
};

export const randomRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});
