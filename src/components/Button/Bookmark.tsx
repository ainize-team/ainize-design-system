import React from "react";
import { Bookmark } from "react-feather";

import { config, styled } from "../../stitches.config";

const StyledButton = styled("button", {
  all: "unset",
  display: "inline-flex",
  gap: 4,
  borderRadius: 4,
  cursor: "pointer",
  fontFamily: "$montserrat",
  fontWeight: 500,
  alignItems: "center",
  boxSizing: "border-box",
  width: "fit-content",

  color: "$text2",
  border: "1px solid $text3",
  transition: "$button",
  "&:hover": {
    color: "$violet150",
    borderColor: "$violet100",
  },
  fontSize: "$p",
  padding: "6px 8px",

  variants: {
    bookmarked: {
      true: {
        color: "$violet150",
      },
      false: {
        color: "$text2",
      },
    },
    disabled: {
      true: {
        border: 0,
        cursor: "unset",
      },
    },
  },
  defaultVariants: {
    disabled: false,
    bookmarked: false,
  },
});

type StyleButtonProps = React.ComponentProps<typeof StyledButton>;

export type ButtonProps = StyleButtonProps & {
  value: number;
  bookmarked?: boolean;
  disabled?: boolean;
};

export function BookmarkButton({
  value,
  bookmarked,
  disabled,
  ...props
}: ButtonProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton bookmarked={bookmarked} disabled={disabled} {...props}>
      {value}
      {bookmarked ? (
        <Bookmark size={16} fill={config.theme.colors.violet150} />
      ) : (
        <Bookmark size={16} />
      )}
    </StyledButton>
  );
}
