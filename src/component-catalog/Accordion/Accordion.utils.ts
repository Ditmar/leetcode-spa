import type { AccordionItem, AccordionVariant } from './Accordion.types';

export function getDefaultExpandedIds(items: AccordionItem[]): string[] {
  return items.filter((item) => item.defaultExpanded).map((item) => item.id);
}

export function toggleExpanded(
  expandedIds: string[],
  itemId: string,
  variant: AccordionVariant
): string[] {
  if (variant === 'single') {
    return expandedIds.includes(itemId) ? [] : [itemId];
  }
  return expandedIds.includes(itemId)
    ? expandedIds.filter((id) => id !== itemId)
    : [...expandedIds, itemId];
}
