'use client';
import { useRef, useState } from 'react';
import { useClickOutside } from '~/lib/hooks/useClickOutside';
import { IconSize, SVGIcon } from './svg-icon';

type Props = {
  user?: { name: string; avatar: string; email: string };
};
export const UserAvatar: React.FC<Props> = ({ user }) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const toggleIsModalShown = () => setIsModalShown((current) => !current);

  const ref = useRef(null);
  useClickOutside(ref, () => {
    setIsModalShown(false);
  });

  if (!user) return null;

  return (
    <>
      <button onClick={toggleIsModalShown}>
        <Avatar user={user} />
      </button>

      {isModalShown && (
        <div
          ref={ref}
          className="bg-back border-back fixed right-0 top-0 flex h-[300px] w-full flex-col items-start justify-between rounded border p-8 shadow sm:w-[400px]"
        >
          <button className="fixed right-2 top-1" onClick={toggleIsModalShown}>
            <SVGIcon name="ri-close-circle-fill" className="cursor-pointer opacity-85 hover:opacity-100" />
          </button>

          <div className="flex items-center gap-6">
            <Avatar user={user} isBig />
            <div className="flex flex-col text-lg">
              <span>{user?.name}</span>
              <span>{user?.email}</span>
            </div>
          </div>
          <span className="w-full text-center text-xl font-extralight">
            I might put something here, in future&trade;
          </span>
          <form className="w-full">
            <button type="submit" className="bg-fore text-back w-full rounded p-2 opacity-85 hover:opacity-100">
              Logout
            </button>
          </form>
        </div>
      )}
    </>
  );
};

const Avatar: React.FC<{ user?: Props['user']; isBig?: boolean }> = ({ user, isBig }) => (
  <img
    className="rounded-full"
    height={isBig ? 75 : 40}
    width={isBig ? 75 : 40}
    src={user?.avatar || ''}
    alt="GitHub user avatar"
  />
);
