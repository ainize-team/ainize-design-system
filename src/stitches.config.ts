import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      violet150: 'hsla(267, 81%, 58%, 1)',
      violet200: 'hsla(263, 69%, 51%, 1)',
    },
    fontSizes: {
      0: '12px',
      1: '14px',
      2: '16px',
      3: '20px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
  },
});
