'use client';

import { CustomIcon } from '@components/Icon';
import { DictionariesType } from '@i18n/dictionariesType';
import { LangQueryType } from '@i18n/getDictionary';
import { Menu } from '@mantine/core';
import { cva } from '@styled-system/css';
import { baseButton } from '@styles/Button/baseButton';
import { customIcon } from '@styles/customIcon';
import Link from 'next/link';
import { Session } from 'next-auth';

import { MenuItem } from './MenuItem';

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

  const settingsMenu = [
    {
      name: 'IconBulb' as const,
      text: dict.header.menu.resolvedCart,
      link: '/',
    },
    {
      name: 'IconUser' as const,
      text: dict.header.menu.editProfile,
      link: '/',
    },
    {
      name: 'IconLogout' as const,
      text: dict.header.menu.logout,
      link: '/',
      color: 'red' as const,
    },
  ];

  return (
    <div className={container()}>
      <Menu width={192}>
        <div className={position()}>
          <Menu.Target>
            <div className={customIcon()}>
              <CustomIcon name="IconSettings" size="md" />
            </div>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Settings</Menu.Label>
            {settingsMenu.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </Menu.Dropdown>
        </div>
      </Menu>

      {/* TODO: 通知用のMenuを実装する */}
      <Menu>
        <Menu.Target>
          <div className={customIcon()}>
            <CustomIcon name="IconBell" size="md" />
          </div>
        </Menu.Target>
        <Menu.Dropdown>
          <div>通知</div>
        </Menu.Dropdown>
      </Menu>
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

const position = cva({
  variants: {
    position: {
      absolute: {
        position: 'absolute',
      },
      relative: {
        position: 'relative',
      },
    },
  },
  defaultVariants: {
    position: 'relative',
  },
});
