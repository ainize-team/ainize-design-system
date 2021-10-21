import React from 'react';
import { styled } from '../../stitches.config';

export const Text = styled('span', {
  variants: {
    size: {
      6: {
        fontSize: '$6',
      },
      5: {
        fontSize: '$5',
      },
      4: {
        fontSize: '$4',
      },
      3: {
        fontSize: '$3',
      },
      2: {
        fontSize: '$2',
      },
      1: {
        fontSize: '$1',
      },
      0: {
        fontSize: '$0',
      },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      medium: {
        fontWeight: '$medium',
      },
      regular: {
        fontWeight: '$regular',
      },
    },
  },
  defaultVariants: {
    size: 2,
    weight: 'regular',
  },
});
