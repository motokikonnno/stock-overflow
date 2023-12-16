import { AllowedIconName, CustomIcon } from '@components/Icon';
import { Menu } from '@mantine/core';
import Link from 'next/link';

type MenuItemProps = {
  name: AllowedIconName;
  text: string;
  link: string;
  color?: 'red';
};

export const MenuItem = ({ item }: { item: MenuItemProps }) => {
  return item.color ? (
    <Link href={item.link}>
      <Menu.Item
        key={item.name}
        color={item.color}
        leftSection={
          <CustomIcon name={item.name} size="ms" color={`icon-${item.color}`} />
        }
      >
        {item.text}
      </Menu.Item>
    </Link>
  ) : (
    <Link href={item.link}>
      <Menu.Item
        key={item.name}
        leftSection={<CustomIcon name={item.name} size="ms" />}
      >
        {item.text}
      </Menu.Item>
    </Link>
  );
};
