import { KeyboardEvent, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { cleanObject } from '@utils/utils';

import { IForm } from './types/FormTypes';

export default function Form({ defaultValues, children, onSubmit, submitOnEnter = false, resetOnSubmit = true, onlyDirty = false, validationMode = 'onChange' }: IForm) {
  const methods = useForm({ defaultValues, mode: validationMode });
  const {
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.code === 'Enter' && !submitOnEnter) e.preventDefault();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(e => {
          onSubmit(onlyDirty ? cleanObject(e, Object.keys(dirtyFields)) : e);
          if (resetOnSubmit) reset();
        })}
        onKeyDown={e => checkKeyDown(e)}
      >
        {children}
      </form>
    </FormProvider>
  );
}
