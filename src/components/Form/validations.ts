export const REQUIRED = {
  required: 'This field is required.',
};

export const MIN_LENGTH = (length: number) => ({
  minLength: {
    value: length,
    message: `This field must be at least ${length} characters!`,
  },
});

export const MAX_LENGTH = (length: number) => ({
  maxLength: {
    value: length,
    message: `This field can't be longer than ${length} characters!`,
  },
});
