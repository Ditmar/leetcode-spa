import { useEffect, useMemo, useState, type KeyboardEvent } from 'react';

import { COMMAND_KEYS } from './Command.constants';
import { filterGroups } from './Command.utils';

import type { CommandGroup } from './Command.types';

interface UseCommandParams {
  groups: CommandGroup[];
  onClose?: () => void;
}

export const useCommand = ({ groups, onClose }: UseCommandParams) => {
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const filteredGroups = useMemo(() => {
    return filterGroups(groups, query);
  }, [groups, query]);

  const flatItems = useMemo(() => {
    return filteredGroups.flatMap((group) => group.items.filter((item) => !item.disabled));
  }, [filteredGroups]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!flatItems.length) {
      if (event.key === COMMAND_KEYS.ESCAPE) {
        onClose?.();
      }
      return;
    }

    if (event.key === COMMAND_KEYS.ARROW_DOWN) {
      event.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % flatItems.length);
    }

    if (event.key === COMMAND_KEYS.ARROW_UP) {
      event.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
    }

    if (event.key === COMMAND_KEYS.ENTER) {
      event.preventDefault();
      flatItems[highlightedIndex]?.onSelect?.();
    }

    if (event.key === COMMAND_KEYS.ESCAPE) {
      event.preventDefault();
      onClose?.();
    }
  };

  return {
    query,
    setQuery,
    filteredGroups,
    flatItems,
    highlightedIndex,
    handleKeyDown,
  };
};
