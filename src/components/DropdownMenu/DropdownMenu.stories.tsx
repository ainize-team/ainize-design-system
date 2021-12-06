import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DropdownMenu } from './DropdownMenu';
import { Text } from '../Text/Text';
import { MoreVertical, Trash2 } from 'react-feather';
import { config } from '../../stitches.config';

export default {
  title: 'Components/DropdownMenu',
} as Meta;

export const All = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <MoreVertical color={config.theme.colors.text2} width={20} height={20} />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item
        color={config.theme.colors.red100}
        startIcon={<Trash2 width={20} height={20} />}
      >
        <Text>Delete</Text>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        rightSlot={
          <Text color="3" size="label">
            3 days ago
          </Text>
        }
      >
        <Text>Text</Text>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);
