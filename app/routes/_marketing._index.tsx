import type { MetaFunction } from '@remix-run/node';

import { AppLogo, LogoSize } from '~/components/app-logo';
import { GitHubSignInBtn } from '~//components/github-signin-btn';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [{ title: 'GH Stats' }, { name: 'description', content: 'Your GitHub metrics in D3' }];
};
export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-around bg-transparent p-2">
      <div className="flex h-auto w-2/3 flex-col items-center justify-center sm:w-1/4">
        <h2 className="text-center text-4xl font-extralight">
          Visualize your GitHub metrics in <span className="text-accent">D3</span>
        </h2>
        <AppLogo size={LogoSize.huge} />
      </div>
      <div className="font-extralight">Sample D3 output here maybe? Yes! Incentive to login</div>
      <div className="flex w-fit flex-col items-center justify-center gap-6 rounded-full p-8">
        <GitHubSignInBtn />
        <Link to={'/about'} className="text-xs underline underline-offset-2">
          What&apos;s this?
        </Link>
      </div>
    </div>
  );
}
