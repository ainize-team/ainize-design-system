import React from 'react';
import { styled } from '../../stitches.config';

const StyledInput = styled('input', {
  fontFamily: '$roboto',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: 4,
  border: '2px solid $line',
  color: '$text1',
  width: '100%',

  '&:focus': {
    border: '2px solid $violet100',
  },
  '&:hover': {
    border: '2px solid $violet150',
  },
  '&:disabled': {
    border: '2px solid $line',
    color: '$text3',
  },
  variants: {
    danger: {
      true: {
        border: '2px solid $red100',
        '&:hover': {
          border: '2px solid $red150',
        },
        '&:focus': {
          border: '2px solid $red100',
        },
      },
    },
    size: {
      medium: {
        padding: '8px 12px',
        fontSize: '$basic',
        lineHeight: 1.5,
      },
      small: {
        padding: '6px 8px',
        fontSize: '$label',
        lineHeight: '16px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const InputWrapper = styled('div', {
  position: 'relative',
});
const EndAdornmentWrapper = styled('div', {
  position: 'absolute',
  right: 10,
  transform: 'translate(-50%, -50%);',
  top: '50%',
  defaultVariants: {
    size: 'medium',
  },
});

type StyledInputProps = React.ComponentProps<typeof StyledInput>;

export type InputProps = StyledInputProps & {
  size?: string;
  width?: number | string;
  endAdornment?: React.ReactNode;
};

export const Input = ({ size, width, endAdornment, ...props }: InputProps) => {
  return (
    <InputWrapper css={{ width }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledInput {...props} />
      <EndAdornmentWrapper>{endAdornment}</EndAdornmentWrapper>
    </InputWrapper>
  );
};

export default Input;
