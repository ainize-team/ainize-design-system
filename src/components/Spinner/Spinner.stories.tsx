import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Spinner } from "./Spinner";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as Meta;

export const Default = () => <Spinner width={20} height={20} />;
