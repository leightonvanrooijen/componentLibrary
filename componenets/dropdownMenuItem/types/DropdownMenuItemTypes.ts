import { Sizes } from '../../common/types/Sizes';
import { Dispatch } from 'react';
import { InputAction } from '../../dropdownInput/types/DropdownInputTypes';

export type DropdownMenuItemProps = {
  code: string,
  text: string,
  size: Sizes,
  dispatch: Dispatch<InputAction>
}
