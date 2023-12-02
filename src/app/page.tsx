import { LangQueryType } from '@i18n/getDictionary';
import { redirect } from 'next/navigation';

const RootPage = ({
  params: { lang },
}: {
  params: { lang: LangQueryType };
}) => {
  redirect(`/${lang}`);
};

export default RootPage;
