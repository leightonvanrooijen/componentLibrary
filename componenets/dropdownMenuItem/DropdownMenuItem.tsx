import React from 'react';

// Components
import { Pressable } from 'react-native';
import { DropdownMenuItemBase } from './DropdownMenuItemBase';
import { Typography } from '../typography/Typography';

// Types
import type { DropdownMenuItemProps } from './types/DropdownMenuItemTypes';
import { InputActionType } from '../dropdownInput/types/DropdownInputTypes';

/**
 * @description DropdownMenu list item
 *
 * @param code
 * @param text
 * @param size
 * @param dispatch
 */
export function DropdownMenuItem({ code, text, size, dispatch }: DropdownMenuItemProps) {
  return (
    <Pressable onPress={() => dispatch({ type: InputActionType.OPTION_SELECTED, payload: text })}>
      {({ pressed }) => (
        <DropdownMenuItemBase pressed={pressed}>
          <Typography size={size}>{code}: {text}</Typography>
        </DropdownMenuItemBase>
      )}
    </Pressable>
  );
}
