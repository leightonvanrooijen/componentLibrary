// Utils
import { DropdownInputReducer } from '../utils/DropdownInputReducer';

// Types
import { InputAction, InputActionType } from '../types/DropdownInputTypes';

describe('DropdownInputReducer', () => {
  const defaultState = { text: '', focused: false }

  describe('setText action type', () => {
    it.concurrent('should change the states text to the text contained in the payload', () => {
      const expectedText = 'Expected text'

      const state = DropdownInputReducer(defaultState, { type: InputActionType.SET_TEXT, payload: expectedText })

      expect(state.text).toEqual(expectedText)
    });
  })

  describe('focus action type', () => {
    it.concurrent('should focus the dropdown based on the payload', () => {
      const state = DropdownInputReducer(defaultState, { type: InputActionType.FOCUS, payload: true })

      expect(state.focused).toEqual(true)
    });
  })

  describe('optionSelected action type', () => {
    it.concurrent('should set the text based on the option selected', () => {
      const option = 'Mock Option';

      const state = DropdownInputReducer(defaultState, { type: InputActionType.OPTION_SELECTED, payload: option })

      expect(state.text).toEqual(option)
    });
  })

    describe('action type does not exist', () => {
      it.concurrent('should return the current, unaltered payload', () => {
        const unsupportedAction = { type: undefined, payload: 's' } as unknown as InputAction<InputActionType.OPTION_SELECTED>

        const state = DropdownInputReducer(defaultState, unsupportedAction)

        expect(state).toEqual(defaultState)
      });
  })
});
