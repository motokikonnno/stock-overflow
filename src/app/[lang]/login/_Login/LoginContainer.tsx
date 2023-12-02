import { getDictionary, LangQueryType } from '@i18n/getDictionary';

import { LoginPresenter } from './LoginPresenter';

export const LoginContainer = async ({ lang }: { lang: LangQueryType }) => {
  const dict = await getDictionary(lang);

  return <LoginPresenter dict={dict} />;
};
