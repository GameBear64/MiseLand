import { FieldValues, RegisterOptions } from 'react-hook-form';

export interface IInput {
  name: string;
  rules?: RegisterOptions<FieldValues, string>;
  styles?: string;
  label?: string;
  [key: string]: unknown;
}
