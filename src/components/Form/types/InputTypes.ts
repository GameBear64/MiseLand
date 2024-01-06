import { FieldValues, RegisterOptions } from 'react-hook-form';

export interface IInput {
  name: string;
  rules?: RegisterOptions<FieldValues, string>;
  styles?: string;
  label?: string;
  onChange?: (value: unknown) => void;
  [key: string]: unknown;
}

export interface IConfirmField extends IInput {
  sameAs: string;
}
