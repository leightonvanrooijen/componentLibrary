// Components
import { View } from 'react-native';

// Utils
import styled from 'styled-components';

// Types
import { DropdownListViewProps } from '../dropdownMenu/types/DropdownMenuTypes';

export const DropdownMenuItemBase = styled(View)`
  height: 20px;
  
  border: ${({ pressed }: DropdownListViewProps) => (pressed ? '1px' : '0px')};
`;
