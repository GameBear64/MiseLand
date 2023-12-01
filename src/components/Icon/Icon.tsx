export default function Icon({ icon, full = false, dense = false }: { icon: string; full?: boolean; dense?: boolean }) {
  return (
    <span
      style={{ fontVariationSettings: `'FILL' ${full ? 1 : 0}`, letterSpacing: dense ? '-0.2em' : '0' }}
      className="material-symbols-rounded align-sub"
    >
      {icon}
    </span>
  );
}
