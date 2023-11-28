import ConnectForm from '../ConnectForm';

export default function Textarea({ name, rules = {}, styles, label, ...rest }) {
  return (
    <ConnectForm>
      {({ register }) => {
        const { ref, ...registerRest } = register(name, rules);
        return (
          <div className={styles}>
            {/* <div className="flex flex-col">
              <label className="text-left font-semibold">{label}</label>
              <div className="mt-1.5">
                <textarea
                  ref={innerRef}
                  onChange={action}
                  className={`rounded-lg border p-1 text-lg text-black shadow-inner shadow-slate-100 ${
                    invalid ? 'border-2 border-red-600' : 'border-slate-200'
                  }`}
                  {...rest}></textarea>
              </div>
            </div> */}
          </div>
        );
      }}
    </ConnectForm>
  );
}
