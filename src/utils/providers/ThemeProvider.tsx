import { useSelector } from 'react-redux';
import { RootState } from 'src/stores/_store';

export default function ThemeProvider({ children }: { children: JSX.Element }) {
  const { color, mode } = useSelector((state: RootState) => state.theme);

  return <div className={`theme-${mode} theme-${color}`}>{children}</div>;
}
