import { MaterialSymbol } from './slices/icons';

export default function Icon({
  icon,
  full = false,
  dense = false,
  clickable = false,
  ...rest
}: {
  icon: MaterialSymbol;
  full?: boolean;
  dense?: boolean;
  clickable?: boolean;
  [key: string]: unknown;
}) {
  return (
    <span
      style={{ fontVariationSettings: `'FILL' ${full ? 1 : 0}`, letterSpacing: dense ? '-0.2em' : '0' }}
      className={`material-symbols-rounded align-sub ${clickable ? 'cursor-pointer' : ''}`}
      {...rest}
    >
      {icon}
    </span>
  );
}
