import React, { useEffect, useState } from 'react';

// Components
import { FlatList } from 'react-native';
import { DropdownMenuItem } from '../dropdownMenuItem/DropdownMenuItem';

// Types
import { DropdownMenuViewBase } from './DropdownMenuViewBase';
import { DropdownMenuData, DropdownMenuProps } from './types/DropdownMenuTypes';

export function DropdownMenu({
  toSearch, query, searcher, size, dispatch
}: DropdownMenuProps) {
  const [options, setOptions] = useState<DropdownMenuData[]>();

  useEffect(() => {
    setOptions(searcher(toSearch, query));
  }, [query]);

  return (
    <DropdownMenuViewBase>
      <FlatList
        data={options}
        renderItem={({ item: { code, text } }) => <DropdownMenuItem code={code} text={text} size={size} dispatch={dispatch} />}
      />
    </DropdownMenuViewBase>
  );
}
