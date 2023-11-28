import ConnectForm from '../ConnectForm';
import { IInput } from '../types/InputTypes';

export default function Input({ name, rules = {}, styles, label, ...rest }: IInput) {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }) => {
        return (
          <div className={styles}>
            <div className="mt-2 flex flex-col">
              <label className="text-left font-semibold">{label}</label>
              <input {...register(name, rules)} className={`h-10 rounded-l border bg-base px-2 focus:border-primary focus:outline-none ${errors[name] ? 'border-2 border-red-600' : 'border-slate-200'}`} {...rest} />
            </div>
            {errors[name] && <p className="text-red-400">{errors[name]?.message as string}</p>}
          </div>
        );
      }}
    </ConnectForm>
  );
}
