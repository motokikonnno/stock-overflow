import 'src/app/globals.css';

import { ClientProviders } from './ClientProviders';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
