import clsx from 'clsx';
import { AppLogo } from './app-logo';
import { UserAvatar } from './user-avatar';

export const AppHeader: React.FC = () => {
  return (
    <header className={clsx('flex items-center justify-between p-3 shadow')}>
      <AppLogo />
      <UserAvatar
        user={{
          name: 'D Mithamo',
          email: 'dm@bmithamo.dev',
          avatar: 'https://avatars.githubusercontent.com/u/33679184?v=4',
        }}
      />
    </header>
  );
};
