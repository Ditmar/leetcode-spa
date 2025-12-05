import { useState, useEffect, useCallback, type ChangeEvent, type KeyboardEvent } from 'react';
import type { SearchBarProps } from './SearchBar.types';
import { DEBOUNCE_DELAY } from './SearchBar.constants';

export const useSearchBar = (props: SearchBarProps) => {
  const {
    value: controlledValue,
    defaultValue,
    onSearch,
    debounceDelay = DEBOUNCE_DELAY,
    onChange
  } = props;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue || '');

  // Sync internal state with controlled value
  useEffect(() => {
    if (isControlled) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue, isControlled]);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      // Only trigger search if not controlled or if explicit requirement
      // Usually debounce is for auto-search on type.
      // Requirement says "debounce... onSearch seguro".
      // If we want auto-search on type:
      if (onSearch && internalValue) {
        // onSearch(internalValue); // Uncomment if auto-search is desired
      }
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [internalValue, debounceDelay, onSearch]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement | HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (onSearch) {
        onSearch(internalValue);
      }
    }
  };

  const handleButtonClick = () => {
    if (onSearch) {
      onSearch(internalValue);
    }
  };

  return {
    value: isControlled ? controlledValue : internalValue,
    handleInputChange,
    handleKeyDown,
    handleButtonClick
  };
};
