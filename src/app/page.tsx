'use client';

import { css } from '@styled-system/css';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Hello 🐼!
      </div>
      {status === 'authenticated' ? 'ログイン済み' : '未ログイン'}
      <button
        onClick={() =>
          signIn('github', { callbackUrl: process.env.NEXTAUTH_URL })
        }
      >
        Sign in with GitHub
      </button>
      <button
        onClick={() =>
          signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })
        }
      >
        Googleでログインする
      </button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
