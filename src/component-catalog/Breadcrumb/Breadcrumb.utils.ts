import type { BreadcrumbItem } from './Breadcrumb.types';

export const getCollapsedItems = (items: BreadcrumbItem[], maxItems: number, expanded: boolean) => {
  if (expanded || items.length <= maxItems) return items;

  const start = items[0];
  const end = items.slice(items.length - (maxItems - 1));

  return [start, { label: '...' }, ...end];
};
