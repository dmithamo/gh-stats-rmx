import type { MetaFunction } from '@remix-run/node';
import { IconSize, SVGIcon } from '~/components/svg-icon';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div className="flex h-screen w-full items-center justify-center text-4xl text-red-500">
      Hello, world!
      <SVGIcon name="ri-github-fill" size={IconSize.huge} />
      <SVGIcon name="ri-github-fill" size={IconSize.big} />
      <SVGIcon name="ri-github-fill" />
      <SVGIcon name="ri-github-fill" size={IconSize.small} />
    </div>
  );
}
