import type { AccordionItem } from './Accordion.types';

export function getDefaultExpandedIds(items: AccordionItem[]): string[] {
  return items.filter((item) => item.defaultExpanded).map((item) => item.id);
}

export function toggleExpanded(
  expandedIds: string[],
  itemId: string,
  variant: 'single' | 'multiple'
): string[] {
  if (variant === 'single') {
    return expandedIds.includes(itemId) ? [] : [itemId];
  }
  return expandedIds.includes(itemId)
    ? expandedIds.filter((id) => id !== itemId)
    : [...expandedIds, itemId];
}
