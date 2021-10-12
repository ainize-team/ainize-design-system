import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

export const Primary = () => <Button>Primary</Button>;

export const Secondary = () => <Button type="secondary">Secondary</Button>;
