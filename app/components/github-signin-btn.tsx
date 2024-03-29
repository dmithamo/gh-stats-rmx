'use client';

import { useState } from 'react';
import GHIcon from '../../public/images/github-auth.svg';
import { loginWithGH } from '../lib/actions/login-with-gh';
import { FullPageSpinner } from './full-page-spinner';

export const GitHubSignInBtn: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  return (
    <>
      <form
        action={async () => {
          try {
            setIsSubmitting(true);
            await loginWithGH();
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <button
          type="submit"
          className="py-4 px-8 bg-fore text-back font-bold rounded-3xl flex items-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-disabled={isSubmitting}
        >
          <span>Login with GitHub</span>
          <GHIcon fill="currentColor" className="h-6 w-6" />
        </button>
      </form>
      {isSubmitting && <FullPageSpinner message="Signing you in..." />}
    </>
  );
};
