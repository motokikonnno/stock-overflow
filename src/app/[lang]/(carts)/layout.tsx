import { LangQueryType } from '@i18n/getDictionary';
import { Footer } from '@layouts/Footer';
import { Header } from '@layouts/Header';

const Layout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: LangQueryType };
}) => {
  return (
    <>
      <Header isActionButton={true} lang={lang} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
