import React from 'react';
import { styled } from '../../stitches.config';

const StyledButton = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  gap: 8,
  color: '$white',
  borderRadius: 4,
  cursor: 'pointer',
  fontFamily: '$roboto',
  fontWeight: 500,
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',

  variants: {
    type: {
      primary: {
        background: '$violet150',
        transition: '$button',
        '&:hover': {
          background: '$violet200',
        },
      },
      secondary: {
        color: '$text2',
        background: '$gray30-a4',
        transition: '$button',
        '&:hover': {
          color: '$text1',
          background: '$gray30-a8',
        },
      },
      outlined: {
        color: '$text2',
        border: '1px solid $gray50',
        transition: '$button',
        '&:hover': {
          color: '$violet150',
          borderColor: '$violet100',
        },
        '&:disabled,[disabled]': {
          borderColor: '$gray50',
          color: '$text2',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.3,
      },
    },
    size: {
      large: {
        fontSize: '$basic',
        lineHeight: '24px',
        padding: '12px 20px',
      },
      medium: {
        fontSize: '$p',
        lineHeight: '24px',
        padding: '8px 12px',
      },
      small: {
        fontSize: '$label',
        lineHeight: '16px',
        padding: '6px 8px',
      },
    },
  },
  defaultVariants: {
    type: 'primary',
    size: 'large',
    disabled: false,
  },
});

type StyleButtonProps = React.ComponentProps<typeof StyledButton>;

export type ButtonProps = StyleButtonProps & {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  disabled?: boolean;
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
