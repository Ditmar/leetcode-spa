import type { CommandGroup } from './Command.types';

export const filterGroups = (groups: CommandGroup[], query: string): CommandGroup[] => {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) return groups;

  return groups
    .map((group) => {
      const filteredItems = group.items.filter((item) => {
        const labelMatch = item.label.toLowerCase().includes(normalizedQuery);
        const keywordMatch = item.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(normalizedQuery)
        );

        return labelMatch || keywordMatch;
      });

      return {
        id: group.id,
        heading: group.heading,
        items: filteredItems.map((item) => ({
          id: item.id,
          label: item.label,
          icon: item.icon,
          shortcut: item.shortcut,
          disabled: item.disabled,
          onSelect: item.onSelect,
          keywords: item.keywords ? item.keywords.slice() : undefined,
        })),
      };
    })
    .filter((group) => group.items.length > 0);
};
