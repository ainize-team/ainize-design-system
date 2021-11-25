import React from 'react';
import ReactSelect from 'react-select';
import { config } from "../../stitches.config";

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: state.selectProps.width,
    minHeight: 'unset',
    height: state.selectProps.size === 'small' ? '28px' : '40px',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: 'unset',
    height: 'inherit',
    ...(state.selectProps.size === 'small' ? {
      padding: '4px 8px',
    } : {
      padding: '8px 12px',
    }),
    alignItems: 'flex-start',
    gap: '8px',
    boxShadow: 'unset',
    ':focus-within': {
      border: state.selectProps.isError ? '2px solid #FE7474' : '2px solid #AE8AFB',
      borderRadius: '4px',
    },
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    margin: 'unset',
    ...(state.selectProps.size === 'small' ? {
      height: '20px',
    } : {
      height: '24px',
    }),
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    height: state.selectProps.size === 'small' ? '28px' : '40px',
    fontFamily: 'roboto, sans-serif',
    ...(state.selectProps.size === 'small' ? {
      fontSize: config.theme.fontSizes.label,
      lineHeight: '16px',
    } : {
      fontSize: config.theme.fontSizes.basic,
      lineHeight: '24px',
    }),
    backgroundColor: state.isFocused ? 'hsla(214, 12%, 89%, .8)' : state.isSelected ? 'hsla(214, 12%, 89%, .4)' : 'white',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: 'hsla(214, 12%, 89%, .8)',
      },
      '&:clicked': {
      backgroundColor: 'hsla(214, 12%, 89%, .8)',
    },
    color: '#4A5057',
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: state.selectProps.size === 'small' ? '20px' : '24px',
    padding: 'unset'
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontFamily: 'roboto, sans-serif',
    color: 'hsl(208, 6%, 54%)',
    margin: 'unset',
    fontSize: state.selectProps.size === 'small' ? config.theme.fontSizes.label : config.theme.fontSizes.basic,
    lineHeight: state.selectProps.size === 'small' ? '16px' : '24px',
  }),
  dropdownIndicator: () => ({
    all: 'unset',
    display: 'flex',
    alignItems: 'flex-start',
    color: 'hsl(208, 6%, 54%)',
  }),
  indicatorsContainer: () => ({
    all: 'unset',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  })
};

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Array<Option>;
  size: 'small' | 'medium';
  width: string;
  isError?: boolean;
  disabled?: boolean;
}

export function Select({ options, size, width, isError, disabled }: SelectProps) {
  return (
    <ReactSelect
      isSearchable={false}  // @ts-ignore
      styles={customStyles}
      width={width}
      isError={isError}
      isDisabled={disabled}
      size={size}
      options={options}
      defaultValue={options?.length > 1 && options[0]}
    />)
}
