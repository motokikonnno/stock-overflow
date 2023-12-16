import 'src/app/globals.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript } from '@mantine/core';

import { ClientProviders } from './ClientProviders';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
