import React from 'react';
import { styled } from '../../stitches.config';

export const Text = styled('span', {
  variants: {
    size: {
      jumbo: {
        fontSize: '$6',
      },
      h1: {
        fontSize: '$5',
      },
      h2: {
        fontSize: '$4',
      },
      h3: {
        fontSize: '$3',
      },
      h4: {
        fontSize: '$2',
      },
      basic: {
        fontSize: '$2',
      },
      p: {
        fontSize: '$1',
      },
      label: {
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
    size: 'basic',
    weight: 'regular',
  },
});
