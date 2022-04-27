// Types
import { InputActions, InputActionType, InputState } from '../types/DropdownInputTypes';

export const DropdownInputReducer = (state: InputState, action: InputActions | undefined): InputState => {
  switch (action?.type) {
    case InputActionType.SET_TEXT:
      return { ...state, text: action.payload }
    case InputActionType.FOCUS:
      return { ...state, focused: action.payload }
    case InputActionType.OPTION_SELECTED:
      return { ...state, text: action.payload }
    default:
      return state
  }
}
