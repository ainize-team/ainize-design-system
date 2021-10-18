import React from 'react';
import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  gap: '8px',
  color: 'white',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: '$roboto',
  fontWeight: '500',

  variants: {
    type: {
      primary: {
        background: '$violet150',
        '&:hover': {
          background: '$violet200',
        },
      },
      secondary: {
        color: '$text2',
        background: '$gray30-a4',

        '&:hover': {
          color: '$text1',
          background: '$gray30-a8',
        },
      },
      outlined: {
        color: '$text2',
        border: '1px solid $gray50',
        '&:hover': {
          color: '$violet150',
          borderColor: '$violet100',
        },
      },
    },
    size: {
      large: {
        fontSize: '$2',
        padding: '12px 20px',
      },
      medium: {
        fontSize: '$1',
        padding: '8px 12px',
      },
      small: {
        fontSize: '$0',
        padding: '6px 8px',
      },
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'large',
  },
});

type StyleButtonProps = React.ComponentProps<typeof StyledButton>;

export type ButtonProps = StyleButtonProps & {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

export function Button({
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <StyledButton {...props}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
}
