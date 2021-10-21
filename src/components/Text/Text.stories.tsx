import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story = (args) => <Text {...args} />;

export const Jumbo = () => (
  <Text size={6} weight="bold">
    Lorem, ipsum dolor sit amet consectetur
  </Text>
);

export const H1 = () => (
  <Text size={5}>Lorem, ipsum dolor sit amet consectetur</Text>
);
H1.storyName = 'h1 Page title';

export const H2 = () => (
  <Text size={4}>Lorem, ipsum dolor sit amet consectetur</Text>
);
H2.storyName = 'h2 Title';

export const H3 = () => (
  <Text size={3}>Lorem, ipsum dolor sit amet consectetur</Text>
);
H3.storyName = 'h3 Title';

export const BasicText = () => (
  <Text size={2}>Lorem, ipsum dolor sit amet consectetur</Text>
);
BasicText.storyName = 'Basic Text';

export const Paragraph = () => (
  <Text size={1}>Lorem, ipsum dolor sit amet consectetur</Text>
);

export const Label = () => (
  <Text size={0}>Lorem, ipsum dolor sit amet consectetur</Text>
);
