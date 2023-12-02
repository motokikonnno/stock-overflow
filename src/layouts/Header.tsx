import { getDictionary, LangQueryType } from '@i18n/getDictionary';
import { cva } from '@styled-system/css';
import { authOptions } from '@utils/authOptions';
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

import { ActionButtons } from './components/ActionButtons';

export const Header = async ({
  isActionButton,
  lang,
}: {
  isActionButton: boolean;
  lang: LangQueryType;
}) => {
  const dict = await getDictionary(lang);
  const session = await getServerSession(authOptions);

  return (
    <header className={container()}>
      <div className={layout()}>
        <Link href={'/'}>
          <Image
            src="/logo.png"
            alt="logo-image"
            width={150}
            height={30}
            className={image()}
          />
        </Link>
        {isActionButton && (
          <ActionButtons dict={dict} session={session} lang={lang} />
        )}
      </div>
    </header>
  );
};

const container = cva({
  base: {
    borderBottom: '1px solid #E5EDF4',
    backgroundColor: 'white',
  },
});

const layout = cva({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '13px 0',
  },
});

const image = cva({
  base: { cursor: 'pointer' },
});
