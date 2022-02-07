import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Avatar } from "./Avatar";
import { styled } from "../../stitches.config";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Flex = styled("div", {
  display: "flex",
  gap: 32,
});
export const avatar = () => (
  <Flex>
    <Avatar
      src="https://avatars.githubusercontent.com/u/65531096?v=4"
      width={32}
      height={32}
    />
    <Avatar
      src="https://avatars.githubusercontent.com/u/65531096?v=4"
      width={64}
      height={64}
    />
    <Avatar
      src="https://avatars.githubusercontent.com/u/65531096?v=4"
      width={128}
      height={128}
    />
  </Flex>
);
