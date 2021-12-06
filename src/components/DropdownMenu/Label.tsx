import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { styled } from '../../stitches.config';

export const DropdownMenuLabel = styled(
  DropdownMenuPrimitive.DropdownMenuLabel,
  {
    padding: 12,
    borderBottom: '1px solid $line',
    h4: {
      color: '$text2',
    },
  }
);
