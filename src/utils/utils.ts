export const cleanObject = (object: { [key: string]: unknown }, desiredFields: string[]) => {
  return Object.assign({}, ...desiredFields.map((field: string) => (field in object ? { field: object[field] } : {})));
};
