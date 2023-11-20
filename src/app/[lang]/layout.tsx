import 'src/app/globals.css';

import { LangQueryType } from '@/i18n/dictionaries/getDictionary';

import { ClientProviders } from '../ClientProviders';

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: LangQueryType };
}) {
  console.log(lng);
  return (
    <html>
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
