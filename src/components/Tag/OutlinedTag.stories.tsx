import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { OutlinedTag } from './Tag';
import { Plus } from 'react-feather';

export default {
  title: 'Components/Tag/Outlined',
  component: OutlinedTag,
} as Meta;

export const OutlinedViolet = () => <OutlinedTag>Outlined</OutlinedTag>;

export const OutlinedGray = () => <OutlinedTag color="gray">Gray</OutlinedTag>;

export const OutlinedSmall = () => <OutlinedTag size="small">Small</OutlinedTag>;

export const TagStartsWithIcon = () => (
  <OutlinedTag startIcon={<Plus size={20} />}>Tag starts with Icon</OutlinedTag>
);

export const TagEndsWithIcon = () => (
  <OutlinedTag endIcon={<Plus size={20} />}>Tag ends with Icon</OutlinedTag>
);
