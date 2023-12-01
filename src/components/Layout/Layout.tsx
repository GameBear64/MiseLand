import NavBar from './NavBar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className="flex h-screen flex-col bg-base text-onBase">
      <NavBar />
      <div className="flex-1 overflow-x-auto">{children}</div>
    </div>
  );
}
