import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "./Dropdown";

import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Text } from "../Text/Text";

export default {
  title: "Components/Dropdown",
} as Meta;

export const DropDown = () => (
  <DropdownMenuRoot>
    <DropdownMenuTrigger>click me</DropdownMenuTrigger>
    <DropdownMenuContent sideOffset={5}>
      <DropdownMenuLabel>
        <Text>Signed in as Ainize</Text>
      </DropdownMenuLabel>
      <DropdownMenuItem>
        <Text weight="medium">Docs</Text>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text weight="medium">Account settings</Text>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Text weight="medium">Logout</Text>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenuRoot>
);
