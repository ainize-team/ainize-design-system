import React from 'react';
import { styled } from '../../stitches.config';

type ButtonTypes = 'primary' | 'secondary';

export interface ButtonProps {
  type: ButtonTypes;
  label: string;
}

export const StyledButton = styled('button', {
  all: 'unset',
  padding: '12px 20px',
  color: 'white',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: '$roboto',

  variants: {
    type: {
      primary: {
        background: '$violet150',
        '&:hover': {
          background: '$violet200',
        },
      },
      secondary: {
        color: '#4A5057',
        background: '#DFE2E6',
      },
    },
  },
  defaultVariants: {
    type: 'primary',
  },
});

export function Button({ label, type }: ButtonProps): React.ReactElement {
  return <StyledButton type={type}>{label}</StyledButton>;
}
