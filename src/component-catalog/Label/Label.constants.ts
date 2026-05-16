export interface FormLabelsConfig {
  requiredIndicator: string;
  optionalIndicator: string;
  tooltipIconAriaLabel: string;
}

export const DEFAULT_FORM_LABELS: FormLabelsConfig = {
  requiredIndicator: '*',
  optionalIndicator: '(optional)',
  tooltipIconAriaLabel: 'More information',
};

export const REQUIRED_INDICATOR = DEFAULT_FORM_LABELS.requiredIndicator;

export const OPTIONAL_INDICATOR = DEFAULT_FORM_LABELS.optionalIndicator;

export const TOOLTIP_ICON_ARIA_LABEL =
  DEFAULT_FORM_LABELS.tooltipIconAriaLabel;
  
