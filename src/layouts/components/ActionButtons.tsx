'use client';

import { CustomIcon } from '@components/Icon';
import { DictionariesType } from '@i18n/dictionariesType';
import { LangQueryType } from '@i18n/getDictionary';
import { cva } from '@styled-system/css';
import { baseButton } from '@styles/Button/baseButton';
import { customIcon } from '@styles/customIcon';
import Link from 'next/link';
import { Session } from 'next-auth';

export const ActionButtons = ({
  dict,
  session,
  lang,
}: {
  dict: DictionariesType;
  session: Session | null;
  lang: LangQueryType;
}) => {
  const buttonText = session
    ? dict.header.button.createCart
    : dict.header.button.login;

  return (
    <div className={container()}>
      <div className={customIcon()}>
        <CustomIcon name="IconBell" size="md" />
      </div>
      <div className={customIcon()}>
        <CustomIcon name="IconSettings" size="md" />
      </div>
      <Link href={`/${lang}/create-cart`} className={baseButton()}>
        {buttonText}
      </Link>
    </div>
  );
};

const container = cva({
  base: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
});
