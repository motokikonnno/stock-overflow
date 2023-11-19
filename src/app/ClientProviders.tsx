'use client';

import { ReactNode } from 'react';

import { ApolloWrapper } from '@/libs/apollo/apolloWrapper';

export const ClientProviders = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ApolloWrapper>{children}</ApolloWrapper>
    </>
  );
};
