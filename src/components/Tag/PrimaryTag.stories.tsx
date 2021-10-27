import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { PrimaryTag } from './Tag';
import { Plus } from 'react-feather';

export default {
  title: 'Components/Tag/Primary',
  component: PrimaryTag,
} as Meta;

export const PrimaryViolet = () => <PrimaryTag>Primary</PrimaryTag>;

export const PrimaryGray = () => <PrimaryTag color="gray">Gray</PrimaryTag>;

export const PrimarySmall = () => <PrimaryTag size="small">Small</PrimaryTag>;

export const TagStartsWithIcon = () => (
  <PrimaryTag startIcon={<Plus size={20} />}>Tag starts with Icon</PrimaryTag>
);

export const TagEndsWithIcon = () => (
  <PrimaryTag endIcon={<Plus size={20} />}>Tag ends with Icon</PrimaryTag>
);
