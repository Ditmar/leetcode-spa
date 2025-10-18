import { useEffect, useState } from 'react';

import { SearchBar } from './SearchBar';
import { DEFAULT_PROPS } from './SearchBar.constants';

import type { SearchBarProps } from './SearchBar.types';

export default {
  title: 'src/Components/SearchBar',
  component: SearchBar,
};
export const Default = () => <SearchBar />;

export const ControlledSearchBar = (args: SearchBarProps) => {
  const [value, setValue] = useState(args.value ?? DEFAULT_PROPS.value);

  useEffect(() => {
    setValue(args.value ?? DEFAULT_PROPS.value);
  }, [args.value]);

  return (
    <SearchBar
      {...args}
      value={value}
      onSearch={(newValue) => {
        setValue(newValue);
        args.onSearch?.(newValue);
      }}
    />
  );
};
