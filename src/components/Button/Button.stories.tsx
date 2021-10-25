import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button } from './Button';
import { Plus } from 'react-feather';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary = () => <Button>Primary</Button>;

export const Secondary = () => <Button type="secondary">Secondary</Button>;

export const Outlined = () => <Button type="outlined">Outlined</Button>;

export const Medium = () => <Button size="medium">Medium</Button>;

export const Small = () => <Button size="small">Small</Button>;

export const ButtonStartsWithIcon = () => (
  <Button startIcon={<Plus size={20} />}>Button starts with Icon</Button>
);

export const ButtonEndsWithIcon = () => (
  <Button endIcon={<Plus size={20} />}>Button ends with Icon</Button>
);
