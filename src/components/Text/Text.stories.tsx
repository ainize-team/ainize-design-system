import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story = (args) => <Text {...args} />;

export const Jumbo = () => (
  <Text size="jumbo" weight="bold">
    Lorem, ipsum dolor sit amet consectetur
  </Text>
);

export const H1 = () => (
  <Text size="h1">Lorem, ipsum dolor sit amet consectetur</Text>
);
H1.storyName = 'h1 Page title';

export const H2 = () => (
  <Text size="h2">Lorem, ipsum dolor sit amet consectetur</Text>
);
H2.storyName = 'h2 Title';

export const H3 = () => (
  <Text size="h3">Lorem, ipsum dolor sit amet consectetur</Text>
);
H3.storyName = 'h3 Title';

export const BasicText = () => (
  <Text size="basic">Lorem, ipsum dolor sit amet consectetur</Text>
);
BasicText.storyName = 'Basic Text';

export const Paragraph = () => (
  <Text size="p">Lorem, ipsum dolor sit amet consectetur</Text>
);

export const Label = () => (
  <Text size="label">Lorem, ipsum dolor sit amet consectetur</Text>
);
