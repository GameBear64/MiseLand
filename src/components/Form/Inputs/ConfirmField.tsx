import ConnectForm from '../ConnectForm';
import { IConfirmField } from '../types/InputTypes';

export default function ConfirmField({ name, sameAs, rules = {}, styles, label, ...rest }: IConfirmField) {
  return (
    <ConnectForm>
      {({ register, watch, formState: { errors } }) => {
        return (
          <div className={styles}>
            <div className={`flex flex-col ${label ? 'mt-2' : ''}`}>
              <label className="text-left font-semibold">{label}</label>
              <input
                {...register(name, {
                  ...rules,
                  validate: (value: string) => {
                    if (watch(sameAs!) != value) return 'Your passwords do no match';
                  },
                })}
                className={`h-10 rounded border bg-base px-2 focus:border-primary focus:outline-none ${
                  errors[name] ? 'border-2 border-red-600' : 'border-slate-200'
                }`}
                {...rest}
              />
            </div>
            {errors[name] && <p className="text-red-400">{errors[name]?.message as string}</p>}
          </div>
        );
      }}
    </ConnectForm>
  );
}
