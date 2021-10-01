import React from 'react';
import { styled } from '@stitches/react';

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

  variants: {
    type: {
      primary: {
        background: '#8B3EEB',
        '&:hover': {
          background: '#6D2AD8',
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
