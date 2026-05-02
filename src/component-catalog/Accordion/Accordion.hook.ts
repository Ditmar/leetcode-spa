import { useControlled } from '@mui/material/utils';
import { useCallback } from 'react';

import { getDefaultExpandedIds, toggleExpanded } from './Accordion.utils';

import type { AccordionProps, AccordionItemWithState } from './Accordion.types';

export const useAccordionState = (props: AccordionProps) => {
  const { items, expandedIds: expandedIdsProp, onExpandedChange, variant = 'multiple' } = props;

  const [expandedIds, setExpandedIds] = useControlled({
    controlled: expandedIdsProp,
    default: getDefaultExpandedIds(items),
    name: 'Accordion',
    state: 'expandedIds',
  });

  const handleChange = useCallback(
    (itemId: string) => () => {
      const newExpandedIds = toggleExpanded(expandedIds, itemId, variant);
      setExpandedIds(newExpandedIds);
      onExpandedChange?.(newExpandedIds);
    },
    [expandedIds, variant, setExpandedIds, onExpandedChange]
  );

  const itemsWithState: AccordionItemWithState[] = items.map((item) => ({
    ...item,
    expanded: expandedIds.includes(item.id),
    onChange: handleChange(item.id),
  }));

  return { itemsWithState };
};
