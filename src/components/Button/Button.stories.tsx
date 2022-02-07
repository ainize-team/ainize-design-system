import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Button } from "./Button";
import { BookmarkButton } from "./Bookmark";
import { Plus } from "react-feather";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary = () => <Button>Primary</Button>;

export const PrimaryDisabled = () => <Button disabled>Primary</Button>;

export const Secondary = () => <Button type="secondary">Secondary</Button>;

export const SecondaryDisabled = () => (
  <Button type="secondary" disabled>
    Secondary
  </Button>
);

export const Outlined = () => <Button type="outlined">Outlined</Button>;

export const OutlinedDisabled = () => (
  <Button type="outlined" disabled>
    Outlined
  </Button>
);

export const Medium = () => <Button size="medium">Medium</Button>;

export const Small = () => <Button size="small">Small</Button>;

export const ButtonStartsWithIcon = () => (
  <Button startIcon={<Plus size={20} />}>Button starts with Icon</Button>
);

export const ButtonEndsWithIcon = () => (
  <Button endIcon={<Plus size={20} />}>Button ends with Icon</Button>
);

export const Bookmarked = () => <BookmarkButton value={1380} bookmarked />;
export const NoBookmarked = () => <BookmarkButton value={1380} />;
export const DisabledBookmarked = () => (
  <BookmarkButton value={1380} disabled />
);
