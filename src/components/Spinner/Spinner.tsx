import React from "react";

import { config, keyframes, styled } from "../../stitches.config";

const spinAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(359deg)",
  },
});

const StyledSpinner = styled("div", {
  animation: `${spinAnimation} 1s infinite`,
  animationTimingFunction: "linear",
  display: "inline-flex",
});

export interface SpinnerProps {
  width: number;
  height: number;
  color?: string;
}

export const Spinner = ({
  width,
  height,
  color = config.theme.colors.violet150,
}: SpinnerProps) => {
  return (
    <StyledSpinner>
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </StyledSpinner>
  );
};
