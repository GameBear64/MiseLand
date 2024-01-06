/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface IForm {
  defaultValues?: any;
  children: JSX.Element[] | JSX.Element;
  onSubmit: any;
  resetOnSubmit?: boolean;
  submitOnEnter?: boolean;
  onlyDirty?: boolean;
  validationMode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all' | undefined;
}

export interface IConnectForm {
  children: (_methods: UseFormReturn<FieldValues, undefined>) => JSX.Element;
}
