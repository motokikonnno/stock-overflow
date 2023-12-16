import {
  IconArrowDown,
  IconArrowRight,
  IconBell,
  IconBrandGithub,
  IconBrandX,
  IconBulb,
  IconCheck,
  IconChevronsRight,
  IconEdit,
  IconFile,
  IconLogout,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
  TablerIconsProps,
} from '@tabler/icons-react';

import { CustomColorKeys, customColors } from '../../../custom-colors';

type SizeType = 'ms' | 'md' | 'mx';

const sizeMap = new Map<SizeType, string>([
  ['ms', '12px'],
  ['md', '24px'],
  ['mx', '32px'],
]);

export const CustomIcon = ({
  size,
  color = 'icon-gray',
  name,
}: {
  name: AllowedIconName;
  size: SizeType;
  color?: CustomColorKeys;
}) => {
  const DynamicIcon = IconMap.get(name)!;
  const customColor = customColors[color];
  return <DynamicIcon size={sizeMap.get(size)} color={customColor} />;
};

export type AllowedIconName =
  | 'IconArrowDown'
  | 'IconArrowRight'
  | 'IconCheck'
  | 'IconChevronsRight'
  | 'IconEdit'
  | 'IconFile'
  | 'IconLogout'
  | 'IconPlus'
  | 'IconSearch'
  | 'IconSettings'
  | 'IconTrash'
  | 'IconUser'
  | 'IconBell'
  | 'IconBrandX'
  | 'IconBrandGithub'
  | 'IconBulb';

const IconMap = new Map<
  AllowedIconName,
  // eslint-disable-next-line no-unused-vars
  (props: TablerIconsProps) => JSX.Element
>([
  ['IconArrowDown', IconArrowDown],
  ['IconArrowRight', IconArrowRight],
  ['IconCheck', IconCheck],
  ['IconChevronsRight', IconChevronsRight],
  ['IconEdit', IconEdit],
  ['IconFile', IconFile],
  ['IconLogout', IconLogout],
  ['IconPlus', IconPlus],
  ['IconSearch', IconSearch],
  ['IconSettings', IconSettings],
  ['IconTrash', IconTrash],
  ['IconUser', IconUser],
  ['IconBell', IconBell],
  ['IconBrandX', IconBrandX],
  ['IconBrandGithub', IconBrandGithub],
  ['IconBulb', IconBulb],
]);
