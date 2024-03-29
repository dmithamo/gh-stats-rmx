import { Outlet } from '@remix-run/react';
import { AppHeader } from '~/components/app-header';

export default function DashboardLayout() {
  return (
    <main>
      <AppHeader />
      <section className="p-2">
        <Outlet />
      </section>
    </main>
  );
}
