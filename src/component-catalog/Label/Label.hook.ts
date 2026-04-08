import { useMemo } from 'react';
import type { LabelProps } from './Label.types';
import { shouldShowOptional, getTooltipId } from './Label.utils';
import { LABEL_TEXTS } from './Label.constants';

/**
 * 
 * 
 * Hook interno para gestionar la lógica de negocio y estados de accesibilidad
 * del componente Label.
 */
export const useLabel = ({
  required,
  optional,
  htmlFor,
  tooltip,
  error,
  disabled,
}: Partial<LabelProps>) => {

  // Memorizamos si debe mostrar el indicador opcional

  const showOptional = useMemo(
    () => shouldShowOptional(optional, required),
    [optional, required]
  );

  // Generamos un ID estable para el tooltip si existe

  const tooltipId = useMemo(
    () => (tooltip ? getTooltipId(htmlFor) : undefined),
    [tooltip, htmlFor]
  );

  // Centralizamos las clases o estados de accesibilidad
  
  const accessibilityProps = {
    'aria-required': required,
    'aria-disabled': disabled,
    'aria-invalid': error,
  };

  return {
    showOptional,
    tooltipId,
    accessibilityProps,
    labels: {
      optionalIndicator: LABEL_TEXTS.OPTIONAL_INDICATOR,
      helpAction: LABEL_TEXTS.HELP_ICON_ARIA_LABEL,
    },
  };
};