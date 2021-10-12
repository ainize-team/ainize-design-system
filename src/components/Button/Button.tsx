import React from 'react';
import { styled } from '../../stitches.config';

export const Button = styled('button', {
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
