import React from "react";
import { styled } from "../../stitches.config";

const Tag = styled("div", {
  all: "unset",
  display: "inline-flex",
  gap: "4px",
  borderRadius: "6px",
  cursor: "normal",
  fontFamily: "$roboto",
  fontWeight: "$regular",
  fontSize: "$label",
  lineHeight: 1.5,
  alignItems: "center",

  variants: {
    size: {
      medium: {
        padding: "2px 8px",
      },
      small: {
        padding: "0px 4px",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

const StyledPrimaryTag = styled(Tag, {
  border: "none",
  variants: {
    color: {
      violet: {
        backgroundColor: "$violet10",
        color: "$violet200",
      },
      gray: {
        backgroundColor: "$gray10",
        color: "$text2",
      },
    },
    clickable: {
      true: {
        cursor: "pointer",
      },
    },
  },

  compoundVariants: [
    {
      color: "violet",
      clickable: true,
      css: {
        "&:hover": {
          backgroundColor: "$violet30",
        },
      },
    },
    {
      color: "gray",
      clickable: true,
      css: {
        "&:hover": {
          backgroundColor: "$gray30",
        },
      },
    },
  ],
  defaultVariants: {
    color: "violet",
  },
});

type StylePrimaryTagProps = React.ComponentProps<typeof StyledPrimaryTag>;

export type PrimaryTagProps = StylePrimaryTagProps & {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  clickable?: boolean;
};

export function PrimaryTag({
  startIcon,
  endIcon,
  children,
  clickable,
  ...props
}: PrimaryTagProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledPrimaryTag clickable={clickable} {...props}>
      {startIcon}
      {children}
      {endIcon}
    </StyledPrimaryTag>
  );
}

const StyledOutlinedTag = styled(Tag, {
  border: "1px solid",
  backgroundColor: "$white",

  variants: {
    color: {
      violet: {
        borderColor: "$violet100",
        color: "$violet100",
      },
      gray: {
        borderColor: "$gray100",
        color: "$gray100",
      },
    },
  },
  defaultVariants: {
    color: "violet",
  },
});

type StyleOutlinedTagProps = React.ComponentProps<typeof StyledOutlinedTag>;

export type OutlinedTagProps = StyleOutlinedTagProps & {
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
};

export function OutlinedTag({
  startIcon,
  endIcon,
  children,
  ...props
}: OutlinedTagProps) {
  return (
    <StyledOutlinedTag {...props}>
      {startIcon}
      {children}
      {endIcon}
    </StyledOutlinedTag>
  );
}
