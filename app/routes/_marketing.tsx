import { Outlet } from '@remix-run/react';
import { AppFooter } from '~/components/app-footer';

export default function MarketingLayout() {
  return (
    <>
      <section className="min-h-screen py-4">
        <Outlet />
      </section>
      <AppFooter />
    </>
  );
}
