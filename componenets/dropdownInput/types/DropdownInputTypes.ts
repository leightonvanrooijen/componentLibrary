import { Dispatch } from 'react';

// Types
import { Sizes } from '../../common/types/Sizes';

export type StyledInputProps = {
  onChangeText: Dispatch<string>,
  onFocus: Dispatch<boolean>,
  value: string,
  placeholder: string,
}

export type InputProps = {
  size: Sizes,
}

export type InputState = {
  text: string,
  focused: boolean,
}

export enum InputActionType {
  SET_TEXT = 'setText',
  FOCUS = 'focus',
  OPTION_SELECTED = 'optionSelected'
}

export interface InputActionPayload {
  [InputActionType.SET_TEXT]: string,
  [InputActionType.FOCUS]: boolean,
  [InputActionType.OPTION_SELECTED]: string,
}

export interface InputAction<T extends InputActionType> {
  type: T,
  payload: InputActionPayload[T],
}

export type InputActions = InputAction<InputActionType.SET_TEXT> | InputAction<InputActionType.FOCUS> | InputAction<InputActionType.OPTION_SELECTED>
