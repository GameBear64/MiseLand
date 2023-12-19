import ConnectForm from '../ConnectForm';
import { IInput } from '../types/InputTypes';

export default function Textarea({ name, rules = {}, styles, label, ...rest }: IInput) {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }) => {
        return (
          <div className={styles}>
            <div className={`flex flex-col ${label ? 'mt-2' : ''}`}>
              <label className="text-left font-semibold">{label}</label>
              <textarea
                {...register(name, rules)}
                className={`rounded-lg border p-1 text-lg text-black shadow-inner shadow-slate-100 ${
                  errors[name] ? 'border-2 border-red-600' : 'border-slate-200'
                }`}
                {...rest}
              ></textarea>
            </div>
            {errors[name] && <p className="text-red-400">{errors[name]?.message as string}</p>}
          </div>
        );
      }}
    </ConnectForm>
  );
}
