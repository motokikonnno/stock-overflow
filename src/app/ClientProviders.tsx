'use client';

import { ApolloWrapper } from '@libs/apollo/apolloWrapper';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ApolloWrapper>
        <SessionProvider>{children}</SessionProvider>
      </ApolloWrapper>
    </>
  );
};
