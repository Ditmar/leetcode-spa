export const shouldShowOptional = (optional?: boolean, required?: boolean): boolean => {
  return Boolean(optional && !required);
};

export const getTooltipId = (htmlFor?: string): string => {
  return htmlFor ? `${htmlFor}-tooltip` : 'label-tooltip';
};
