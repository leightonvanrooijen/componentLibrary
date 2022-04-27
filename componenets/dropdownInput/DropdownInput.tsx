import React, { Reducer, useReducer } from 'react';

// Components
import { TextInput, View } from 'react-native';

// Utils
import styled from 'styled-components';

// Types
import { DropdownMenu } from '../dropdownMenu/DropdownMenu';
import { searcher } from '../dropdownMenu/utils/searcher';
import { DropdownInputReducer } from './utils/DropdownInputReducer';
import {
  InputAction,
  InputActions,
  InputActionType,
  InputProps,
  InputState,
  StyledInputProps
} from './types/DropdownInputTypes';
import { DropdownMenuData } from '../dropdownMenu/types/DropdownMenuTypes';

// @todo remove when story book is introduced
const data: DropdownMenuData[] = [
  { id: 1, code: 'CC', text: 'Coke Can' },
  { id: 2, code: 'COC', text: 'Can of Coke' },
  { id: 3, code: 'BOC', text: 'Bottle of Coke' },
];

export const InputBase = styled(TextInput)<StyledInputProps>`
  border: 1px lightgray;
  border-radius: 5px;
  
  font-size: 16px;

  padding: 8px;
  
  height: 40px;
  width: 200px;
`;

export const InputViewBase = styled(View)`
  width: 200px;
`;

export function DropdownInput({ size }: InputProps) {
  const [state, dispatch] = useReducer<Reducer<InputState, InputActions>>(DropdownInputReducer, { text: '', focused: false });

  return (
    <InputViewBase>
      <InputBase
        onChangeText={(text) => dispatch({ type: InputActionType.SET_TEXT, payload: text })}
        onFocus={() => dispatch({ type: InputActionType.FOCUS, payload: true})}
        value={state.text}
        placeholder="input" />
       {state.focused && <DropdownMenu toSearch={data} query={state.text} searcher={searcher} size={size} dispatch={dispatch} />}
    </InputViewBase>
  );
}

/*
when menu is clicked we want the focus to be contained between the two

 */
