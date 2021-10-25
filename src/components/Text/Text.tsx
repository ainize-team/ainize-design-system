import React from 'react';
import { styled } from '../../stitches.config';

export const Text = styled('span', {
  variants: {
    size: {
      jumbo: {
        fontSize: '$6',
        lineHeight: '64px',
      },
      h1: {
        fontSize: '$5',
        lineHeight: '40px',

      },
      h2: {
        fontSize: '$4',
        lineHeight: '32px',
      },
      h3: {
        fontSize: '$3',
        lineHeight: '28px',
      },
      h4: {
        fontSize: '$2',
        lineHeight: '20px',
      },
      basic: {
        fontSize: '$2',
        lineHeight: '24px',
      },
      p: {
        fontSize: '$1',
        lineHeight: '20px',
      },
      label: {
        fontSize: '$0',
        lineHeight: '16px',
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
