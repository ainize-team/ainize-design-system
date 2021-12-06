import React from 'react';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

import { config, styled } from '../../stitches.config';

const StyledDropdownMenuItem = styled(DropdownMenuPrimitive.Item, {
  display: 'flex',
  padding: '12px',
  alignItems: 'center',
  gap: 8,
  outline: 'unset',
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: '$gray10',
  },
});

const MainItem = styled('span', {
  flex: 1,
});

export interface DropdownMenuItemProps {
  color?: string;
  startIcon?: React.ReactElement;
  children: React.ReactElement;
  rightSlot?: React.ReactElement;
}

export function DropdownMenuItem({
  color = config.theme.colors.text2,
  startIcon,
  children,
  rightSlot,
}: DropdownMenuItemProps) {
  return (
    <StyledDropdownMenuItem
      css={{
        color: color,
      }}
    >
      {startIcon}
      <MainItem>{children}</MainItem>
      {rightSlot}
    </StyledDropdownMenuItem>
  );
}
