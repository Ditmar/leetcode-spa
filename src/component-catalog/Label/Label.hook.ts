import { useMemo } from 'react';

import { LABEL_TEXTS } from './Label.constants';
import { type LabelProps } from './Label.types';
import { shouldShowOptional } from './Label.utils';

export const useLabel = (props: Partial<LabelProps>) => {
  const { required, optional, tooltip, error, disabled, id, htmlFor } = props;

  const showOptional = useMemo(() => shouldShowOptional(optional, required), [optional, required]);

  const tooltipId = useMemo(
    () => (tooltip ? `${id || htmlFor || 'label'}-tooltip` : undefined),
    [tooltip, id, htmlFor]
  );

  const accessibilityProps = useMemo(
    () => ({
      'aria-required': required ? true : undefined,
      'aria-invalid': error ? true : undefined,
      'aria-disabled': disabled ? true : undefined,
      'aria-describedby': tooltipId,
    }),
    [required, error, disabled, tooltipId]
  );

  const i18n = {
    optionalLabel: LABEL_TEXTS.OPTIONAL_INDICATOR,
    tooltipActionLabel: LABEL_TEXTS.HELP_ICON_ARIA_LABEL,
  };

  return {
    showOptional,
    tooltipId,
    accessibilityProps,
    i18n,
    hasTooltip: Boolean(tooltip),
  };
};
