import styled from 'styled-components';
import { Text } from 'react-native';
import { baseTheme } from '../../theme/theme';
import { Sizes } from '../common/types/Sizes';
import { FontSizes } from './types/FontSizes';

export type Typography = {
  size: Sizes
  theme: typeof baseTheme
}

export const Typography = styled(Text)`
  font-size: ${({ size }: Typography) => FontSizes[size]}
  color: ${({ theme }: Typography) => theme.typography.color[800]}
`;
