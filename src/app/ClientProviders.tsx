'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { ApolloWrapper } from '@/libs/apollo/apolloWrapper';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ApolloWrapper>
        <SessionProvider>{children}</SessionProvider>
      </ApolloWrapper>
    </>
  );
};
