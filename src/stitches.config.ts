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
  },
});
