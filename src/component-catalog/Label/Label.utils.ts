/**
 * Determina si se debe mostrar el indicador opcional.
 * No se muestra si el campo ya es obligatorio.
 */
export const shouldShowOptional = (
  optional?: boolean,
  required?: boolean
): boolean => {
  return Boolean(optional && !required);
};

/**
 * Genera un ID único para el tooltip si no se proporciona uno,
 * mejorando la vinculación ARIA.
 */
export const getTooltipId = (htmlFor?: string): string => {
  return htmlFor ? `${htmlFor}-tooltip` : 'label-tooltip';
};