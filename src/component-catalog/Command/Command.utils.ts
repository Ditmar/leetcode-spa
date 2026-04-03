import type { CommandGroup } from './Command.types';
export const filterGroups = (groups: CommandGroup[], query: string): CommandGroup[] => {
  const normalizedQuery = query.trim().toLocaleLowerCase();

  if (!normalizedQuery) return groups;

  return groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => {
        const labelMatch = item.label.toLowerCase().includes(normalizedQuery);
        const keywordMatch = item.keywords?.some((keyword) =>
          keyword.toLowerCase().includes(normalizedQuery)
        );

        return labelMatch || keywordMatch;
      }),
    }))
    .filter((group) => group.items.length > 0);
};
