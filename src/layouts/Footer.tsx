import { CustomIcon } from '@components/Icon';
import { cva } from '@styled-system/css';
import { customIcon } from '@styles/customIcon';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = async () => {
  return (
    <footer className={container()}>
      <div className={layout()}>
        <Image src="/logo.png" alt="logo-image" width={150} height={30} />
        <div className={snsIconsContainer()}>
          {/* TODO: hrefを適切なパスにする */}
          <Link href={'/'} className={customIcon()}>
            <CustomIcon name="IconBrandX" size="md" />
          </Link>
          <Link href={'/'} className={customIcon()}>
            <CustomIcon name="IconBrandGithub" size="md" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

const container = cva({
  base: {
    borderTop: '1px solid #E5EDF4',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
    padding: '31px 0',
  },
});

const snsIconsContainer = cva({
  base: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  },
});
