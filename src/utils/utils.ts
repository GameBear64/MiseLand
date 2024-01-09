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

export async function readFile(file: Blob) {
  if (!file) return Promise.reject('No file provided');

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = event => resolve((event?.target?.result as string).split(';base64,').pop());

    reader.onerror = error => reject(error);
  });
}

export const timeFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'short',
});

export const relativeTime = new Intl.RelativeTimeFormat('en', {
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'long',
});
