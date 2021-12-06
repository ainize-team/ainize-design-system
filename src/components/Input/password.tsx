import React from 'react';
import { styled } from '../../stitches.config';
import { Eye } from 'react-feather';

const PasswordInput = styled('textarea', {
  fontFamily: '$roboto',
  outline: 'none',
  boxSizing: 'border-box',
  borderRadius: 4,
  border: '2px solid $line',
  color: '$text1',
  width: '100%',
  height: 'auto',
  resize: 'none',

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
    multiLine:{
      true:{
        height: '200px',
      },
    }
  },
  defaultVariants: {
    size: 'medium',
  },
});
type StyledInputProps = React.ComponentProps<typeof PasswordInput>;

export type InputProps = StyledInputProps & {
  size: string;
  multiLine?: boolean;
}

export const Input = ({ size, ...props }: InputProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PasswordInput {...props} size={size} rows={1}/>;
};

export default Input;
