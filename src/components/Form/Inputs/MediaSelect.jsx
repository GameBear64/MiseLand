import ConnectForm from '../ConnectForm';

export default function MediaSelect({ name, rules = {}, styles, label, ...rest }) {
  return (
    <ConnectForm>
      {({ register, watch, setValue, formState: { dirtyFields } }) => {
        register(name, rules);
        const file = watch(name, '');

        return (
          <div className={`flex flex-col items-center justify-center ${styles}`}>
            <label className="self-start text-xl font-semibold">{label}</label>
            {file ? (
              <div className="relative w-fit self-center">
                <img className="max-h-52" src={dirtyFields[name] ? URL.createObjectURL(file) : `http://localhost:3030/recourse/${file}`} alt="" />
                <div className="absolute right-[2px] top-[2px] rounded-md">
                  {/* <span className="material-symbols-outlined rounded-l-lg border-2 border-neutral-400 bg-white text-neutral-700">
                    edit
                  </span> */}
                  <span
                    className="material-symbols-outlined rounded-lg border-2 border-neutral-400 bg-white text-neutral-700"
                    onClick={() => {
                      setValue(name, '', { shouldDirty: true, shouldTouch: true });
                    }}
                  >
                    delete
                  </span>
                </div>
              </div>
            ) : (
              <input
                styleInput="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold file:cursor-pointer
                file:bg-neutral-100 file:text-black-700
                hover:file:bg-neutral-200 border-none mb-2 font-semibold"
                {...rest}
                type="file"
                onChange={e => {
                  setValue(name, e.target.files[0], { shouldDirty: true, shouldTouch: true });
                }}
              />
            )}
          </div>
        );
      }}
    </ConnectForm>
  );
}
