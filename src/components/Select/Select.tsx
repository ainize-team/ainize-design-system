/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import ReactSelect, { ActionMeta, SingleValue } from "react-select";

import { config } from "../../stitches.config";

const customStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: state.selectProps.width,
    minHeight: "unset",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    minHeight: "unset",
    ...(state.selectProps.size === "small"
      ? {
          padding: "4px 8px",
        }
      : {
          padding: "8px 12px",
        }),
    alignItems: "flex-start",
    gap: "8px",
    boxShadow: "unset",
    ":focus-within": {
      border: state.selectProps.isError
        ? `2px solid ${config.theme.colors.red100}`
        : `2px solid ${config.theme.colors.violet100}`,
      borderRadius: "4px",
    },
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    margin: "unset",
    ...(state.selectProps.size === "small"
      ? {
          height: "20px",
        }
      : {
          height: "24px",
        }),
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    fontFamily: "roboto, sans-serif",
    ...(state.selectProps.size === "small"
      ? {
          fontSize: "0.75rem",
          lineHeight: "16px",
        }
      : {
          fontSize: "1rem",
          lineHeight: "24px",
        }),
    // eslint-disable-next-line no-nested-ternary
    backgroundColor: state.isFocused
      ? "hsla(214, 12%, 89%, .8)"
      : state.isSelected
      ? "hsla(214, 12%, 89%, .4)"
      : "white",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "hsla(214, 12%, 89%, .8)",
    },
    "&:clicked": {
      backgroundColor: "hsla(214, 12%, 89%, .8)",
    },
    color: config.theme.colors.text1,
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    height: state.selectProps.size === "small" ? "20px" : "24px",
    padding: "unset",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    fontFamily: "roboto, sans-serif",
    color: config.theme.colors.text1,
    margin: "unset",
    fontSize: state.selectProps.size === "small" ? "0.75rem" : "1rem",
    lineHeight: state.selectProps.size === "small" ? "16px" : "24px",
  }),
  dropdownIndicator: () => ({
    all: "unset",
    display: "flex",
    alignItems: "flex-start",
    color: "hsl(208, 6%, 54%)",
  }),
  indicatorsContainer: () => ({
    all: "unset",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Array<Option>;
  size: "small" | "medium";
  width: string;
  onChange?: (
    newValue: SingleValue<Option>,
    actionMeta: ActionMeta<any>,
  ) => void;
  isError?: boolean;
  disabled?: boolean;
  defaultValue?: Option;
  [x: string]: any;
}

// export function Select({...props}: StyleSelectProps) {
export function Select({
  options,
  size,
  width,
  isError,
  disabled,
  onChange,
  defaultValue,
  ...props
}: SelectProps) {
  return (
    <ReactSelect
      isSearchable={false} // @ts-ignore
      styles={customStyles}
      width={width}
      isError={isError}
      isDisabled={disabled}
      size={size}
      options={options}
      defaultValue={defaultValue || options[0]}
      onChange={onChange}
      {...props}
    />
  );
}
