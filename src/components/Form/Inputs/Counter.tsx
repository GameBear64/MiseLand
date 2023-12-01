import Icon from '@components/Icon/Icon';

import ConnectForm from '../ConnectForm';
import { IInput } from '../types/InputTypes';

export default function Counter({ name, rules = {}, styles, label, ...rest }: IInput) {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }) => {
        return (
          <div className={styles}>
            <div className={`flex flex-col ${label ? 'mt-2' : ''}`}>
              <label className="text-left font-semibold">{label}</label>
              <div className="flex">
                <button
                  type="button"
                  className="h-10 w-8 cursor-pointer rounded-l bg-gray-300 pt-1 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
                >
                  <Icon icon="add" />
                </button>
                <input
                  {...register(name, rules)}
                  type="number"
                  className={`h-10 w-12 border bg-base px-2 text-center [appearance:textfield] focus:border-primary focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none ${
                    errors[name] ? 'border-2 border-red-600' : 'border-slate-200'
                  }`}
                  {...rest}
                />
                <button
                  type="button"
                  className="h-10 w-8 cursor-pointer rounded-r bg-gray-300 pt-1 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
                >
                  <Icon icon="remove" />
                </button>
              </div>
            </div>
            {errors[name] && <p className="text-red-400">{errors[name]?.message as string}</p>}
          </div>
        );
      }}
    </ConnectForm>
  );
}
