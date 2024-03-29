'use client';

import { useState } from 'react';
import { FullPageSpinner } from './full-page-spinner';
import { SVGIcon } from './svg-icon';

export const GitHubSignInBtn: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  return (
    <>
      <form>
        <button
          type="submit"
          className="bg-fore text-back flex items-center gap-4 rounded-2xl px-3 font-bold disabled:cursor-not-allowed disabled:opacity-50"
          aria-disabled={isSubmitting}
        >
          <span>Login with GitHub</span>
          <SVGIcon name="ri-github-fill" />
        </button>
      </form>
      {isSubmitting && <FullPageSpinner message="Signing you in..." />}
    </>
  );
};
