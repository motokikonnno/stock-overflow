import { LangQueryType } from '@i18n/getDictionary';
import { authOptions } from '@utils/authOptions';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { Login } from './_Login';

const LoginPage = async ({
  params: { lang },
}: {
  params: { lang: LangQueryType };
}) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return <Login lang={lang} />;
};

export default LoginPage;
