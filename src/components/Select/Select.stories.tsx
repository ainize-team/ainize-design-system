import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { Option, Select } from './Select';
import React from 'react';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story = (args) => <Select options={[]} size={'small'} width='100px' {...args} />;
const options: Array<Option> = [{ label: 'Ainize', value: 'Ainize' },{ label: 'AI Network', value: 'AI Network' },{ label: 'Common Computer', value: 'Common Computer' },];

export const Small = () => (
  <Select size="small" options={options} width="300px" />
);

export const Medium = () => (
  <Select size="medium" options={options} width="300px" />
);

export const SmallWithError = () => (
  <Select size="small" options={options} width="300px" isError />
);

export const MediumWithError = () => (
  <Select size="medium" options={options} width="300px" isError />
);

export const SmallWithDisabled = () => (
  <Select size="small" options={options} width="300px" disabled />
);

export const MediumWithDisabledIsError = () => (
  <Select size="medium" options={options} width="300px" disabled />
);
