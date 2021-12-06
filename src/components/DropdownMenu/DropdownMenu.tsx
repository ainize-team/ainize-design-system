import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { DropdownMenuItem } from './Item';
import { DropdownMenuLabel } from './Label';

import { styled } from '../../stitches.config';

const DropdownMenuRoot = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger, {
  cursor: 'pointer',
});

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content, {
  backgroundColor: '$white',
  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: 4,
  minWidth: 200,
  padding: 4,
  fontFamily: '$roboto',
});

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Label: DropdownMenuLabel,
};
