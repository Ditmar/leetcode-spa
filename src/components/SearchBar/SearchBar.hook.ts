import { useState, useEffect, useCallback, useMemo } from 'react';

import { DEBOUNCE_DELAY } from './SearchBar.constants';

import type { PropsSearchBar } from './SearchBar.types';

export const useSearchBar = (props: PropsSearchBar) => {
  const {
    value: controlledValue,
    defaultValue = '',
    onSearch,
    debounceDelay = DEBOUNCE_DELAY,
    onChange,
    autoSearch = false,
  } = props;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState<string>(defaultValue);

  const currentValue = useMemo(
    () => (isControlled ? (controlledValue ?? '') : internalValue),
    [isControlled, controlledValue, internalValue]
  );

  useEffect(() => {
    if (isControlled && controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue, isControlled]);

  useEffect(() => {
    if (!autoSearch || !onSearch) {
      return;
    }

    const handler = setTimeout(() => {
      if (currentValue.trim() !== '') {
        onSearch(currentValue);
      }
    }, debounceDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [currentValue, debounceDelay, onSearch, autoSearch]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      if (onChange) {
        onChange(e);
      }
    },
    [isControlled, onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement | HTMLInputElement | HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(currentValue);
      }
    },
    [onSearch, currentValue]
  );

  const handleButtonClick = useCallback(() => {
    if (onSearch) {
      onSearch(currentValue);
    }
  }, [onSearch, currentValue]);

  return {
    value: currentValue,
    handleInputChange,
    handleKeyDown,
    handleButtonClick,
  };
};
