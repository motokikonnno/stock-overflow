import { getDictionary, LangQueryType } from '@i18n/getDictionary';
import { authOptions } from '@utils/authOptions';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

const CartListPage = async ({
  params: { lang },
}: {
  params: { lang: LangQueryType };
}) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(`/${lang}/login`);
  }

  const dict = await getDictionary(lang);

  return (
    <div>
      <h2>{dict.login.title}</h2>
    </div>
  );
};

export default CartListPage;
