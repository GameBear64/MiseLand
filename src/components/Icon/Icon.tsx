export default function Icon({ icon, full = false }: { icon: string; full?: boolean }) {
  return (
    <span style={{ fontVariationSettings: `'FILL' ${full ? 1 : 0}`, letterSpacing: '-0.2em' }} className="material-symbols-rounded align-sub">
      {icon}
    </span>
  );
}
