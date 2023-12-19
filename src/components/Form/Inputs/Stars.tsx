import { useState } from 'react';

import Icon from '@components/Icon/Icon';

import ConnectForm from '../ConnectForm';
import { IInput } from '../types/InputTypes';

export default function Stars({ name, rules = {}, styles, label, ...rest }: IInput) {
  const [hoverStars, setHoverStars] = useState(0);
  return (
    <ConnectForm>
      {({ register, watch, setValue, formState: { errors } }) => {
        const stars = watch(name, 0);

        const fullStars = Array.from({ length: Math.round(hoverStars || stars) }, (_, i) => i + 1);
        const hollowStars = Array.from({ length: 5 - Math.round(hoverStars || stars) }, (_, i) => i + 1);

        register(name, rules);
        return (
          <div className={styles}>
            <div className={`flex flex-col ${label ? 'mt-2' : ''}`}>
              <label className="text-left font-semibold">{label}</label>
              <div className="flex items-center text-yellow-500">
                <div onMouseLeave={() => setHoverStars(0)}>
                  {fullStars.map(i => (
                    <Icon
                      key={i}
                      icon="star"
                      full
                      clickable
                      onMouseEnter={() => setHoverStars(i)}
                      onClick={() => setValue(name, i, { shouldDirty: true, shouldTouch: true })}
                    />
                  ))}
                  {hollowStars.map(i => (
                    <Icon
                      key={i}
                      icon="star"
                      clickable
                      onMouseEnter={() => setHoverStars(i + fullStars.length)}
                      onClick={() => setValue(name, i + fullStars.length, { shouldDirty: true, shouldTouch: true })}
                    />
                  ))}
                </div>
                <span className="mx-2 rounded bg-primary-light px-2.5 py-0.5 text-xs font-semibold text-primary-dark ">
                  {stars} / 5
                </span>
              </div>
            </div>
            {errors[name] && <p className="text-red-400">{errors[name]?.message as string}</p>}
          </div>
        );
      }}
    </ConnectForm>
  );
}
