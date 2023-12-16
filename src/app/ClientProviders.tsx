'use client';

import { ApolloWrapper } from '@libs/apollo/apolloWrapper';
import { MantineProvider } from '@mantine/core';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ApolloWrapper>
        <MantineProvider>
          <SessionProvider>{children}</SessionProvider>
        </MantineProvider>
      </ApolloWrapper>
    </>
  );
};
