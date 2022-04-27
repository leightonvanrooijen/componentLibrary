// Utils
import { Sizes } from '../../common/types/Sizes';
import { Dispatch } from 'react';

// Types
import type { InputAction } from '../../dropdownInput/types/DropdownInputTypes';

export type DropdownListViewProps = {
  pressed: boolean // workaround - https://github.com/styled-components/styled-components/issues/3228
}

export type DropdownMenuData = {
  id: number,
  code: string,
  text: string,
}

export type DropdownMenuProps = {
  toSearch: DropdownMenuData[],
  query: string
  searcher: (toSearch: DropdownMenuData[], query: string) => DropdownMenuData[],
  size: Sizes,
  dispatch: Dispatch<InputAction>
}
