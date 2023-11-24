import { IInput } from './types/InputTypes';
import ConnectForm from './ConnectForm';

export default function Input({ name, rules = {}, styles, label, ...rest }: IInput) {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }) => {
        return (
          <div className={styles}>
            <div className="flex flex-col">
              <label className="text-left font-semibold">{label}</label>
              <input {...register(name, rules)} className={`mt-1.5 h-10 rounded-l border shadow-slate-100 ${errors[name] ? 'border-2 border-red-600' : 'border-slate-200'}`} {...rest} />
            </div>
            {errors[name] && <p className="font-semibold text-red-600">{errors[name]?.message as string}</p>}
          </div>
        );
      }}
    </ConnectForm>
  );
}
