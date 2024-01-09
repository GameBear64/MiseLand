import Icon from '@components/Icon/Icon';

import { readFile } from '@utils/utils';

import ConnectForm from '../ConnectForm';
import { IInput } from '../types/InputTypes';

export default function MediaSelect({ name, rules = {}, styles, label, ...rest }: IInput) {
  return (
    <ConnectForm>
      {({ register, watch, setValue, formState: { dirtyFields } }) => {
        register(name, rules);
        const file = watch(name, '');

        return (
          <div className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary ${styles}`}>
            {file ? (
              <div className="relative w-fit self-center">
                <img
                  className="max-h-52"
                  src={dirtyFields[name] ? `data:image/png;base64,${file}` : `http://localhost:3030/recourse/${file}`}
                  alt=""
                />
                <div className="absolute right-[2px] top-[2px] rounded-md">
                  <span
                    className="flex items-center justify-center rounded-lg border border-neutral-400 bg-base p-1 text-onBase"
                    onClick={() => {
                      setValue(name, '', { shouldDirty: true, shouldTouch: true });
                    }}
                  >
                    <Icon icon="delete" clickable />
                  </span>
                </div>
              </div>
            ) : (
              <label className="flex h-full cursor-pointer items-center self-start p-2 text-xl font-semibold">
                <p className="text-lg font-medium tracking-wide">{label || name}</p>
                <input
                  className="hidden"
                  {...rest}
                  type="file"
                  onChange={e => {
                    readFile(e.target.files?.[0] as Blob).then(base64image =>
                      setValue(name, base64image, { shouldDirty: true, shouldTouch: true })
                    );
                  }}
                />
              </label>
            )}
          </div>
        );
      }}
    </ConnectForm>
  );
}
