import React from "react";
import { X } from "react-feather";
import { Meta } from "@storybook/react/types-6-0";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

export const Small = () => (
  <div>
    <Input
      size="small"
      defaultValue="Lorem, ipsum dolor sit amet consectetur"
    />
  </div>
);

export const Medium = () => (
  <Input size="medium" defaultValue="Lorem, ipsum dolor sit amet consectetur" />
);

export const SmallWithDanger = () => (
  <Input
    size="small"
    danger
    defaultValue="Lorem, ipsum dolor sit amet consectetur"
  />
);

export const MediumWithDanger = () => (
  <Input
    size="medium"
    danger
    defaultValue="Lorem, ipsum dolor sit amet consectetur"
  />
);

export const Disabled = () => (
  <Input
    size="small"
    disabled
    defaultValue="Lorem, ipsum dolor sit amet consectetur"
  />
);

export const WithEndAdornment = () => (
  <Input
    defaultValue="Lorem, ipsum dolor sit amet consectetur"
    endAdornment={<X size={20} />}
  />
);
