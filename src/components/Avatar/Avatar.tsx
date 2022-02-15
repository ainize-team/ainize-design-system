import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { styled } from "../../stitches.config";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  cursor: "pointer",

  borderRadius: "100%",
});

const AvatarContainer = styled("div", {
  height: "40px",
});

export interface AvatarProps {
  src: string;
  width: number;
  height: number;
  css?: any;
}

export const Avatar = ({ src, width, height, css }: AvatarProps) => {
  return (
    <AvatarContainer>
      <StyledAvatar css={css}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="avatar"
          src={src}
          width={width}
          height={height}
          referrerPolicy="no-referrer"
        />
      </StyledAvatar>
    </AvatarContainer>
  );
};
