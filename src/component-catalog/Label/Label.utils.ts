import { REQUIRED_INDICATOR, OPTIONAL_INDICATOR } from './Label.constants';

export function buildAccessibleLabel(text: string, required?: boolean, optional?: boolean): string {
  if (required) return `${text} ${REQUIRED_INDICATOR}`;
  if (optional) return `${text} ${OPTIONAL_INDICATOR}`;
  return text;
}

export function resolveRequiredOptional(
  required?: boolean,
  optional?: boolean
): { showRequired: boolean; showOptional: boolean } {
  return {
    showRequired: !!required,
    showOptional: !!optional && !required,
  };
}
