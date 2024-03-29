import { AppHeader } from '../components/app-header';

type Props = {
  children: React.ReactNode;
};
export default function DashboardLayout({ children }: Props) {
  return (
    <main>
      <AppHeader />
      <section className="p-2">{children}</section>
    </main>
  );
}
