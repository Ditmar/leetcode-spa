import { useMemo } from 'react';

import { LABEL_TEXTS } from './Label.constants';
import { type LabelProps } from './Label.types';
import { shouldShowOptional } from './Label.utils';

/**
 * Hook interno para el componente Label.
 * Centraliza la lógica de visualización y accesibilidad.
 */

export const useLabel = (props: Partial<LabelProps>) => {
  const { required, optional, tooltip, error, disabled, id, htmlFor } = props;

  // 1. Lógica para el indicador opcional

  const showOptional = useMemo(() => shouldShowOptional(optional, required), [optional, required]);

  // 2. Gestión de IDs para vinculación ARIA (Tooltip -> Label)

  const tooltipId = useMemo(
    () => (tooltip ? `${id || htmlFor || 'label'}-tooltip` : undefined),
    [tooltip, id, htmlFor]
  );

  // 3. Atributos de accesibilidad derivados del estado

  const accessibilityProps = useMemo(
    () => ({
      'aria-required': required ? true : undefined,
      'aria-invalid': error ? true : undefined,
      'aria-disabled': disabled ? true : undefined,
      // Si hay un tooltip, podemos vincularlo mediante aria-describedby
      'aria-describedby': tooltipId,
    }),
    [required, error, disabled, tooltipId]
  );

  // 4. Agrupación de textos de la interfaz (i18n ready)

  const i18n = {
    optionalLabel: LABEL_TEXTS.OPTIONAL_INDICATOR,
    tooltipActionLabel: LABEL_TEXTS.HELP_ICON_ARIA_LABEL,
  };

  return {
    showOptional,
    tooltipId,
    accessibilityProps,
    i18n,
    // Estado booleano para facilitar estilos condicionales si fuera necesario en el TSX
    hasTooltip: Boolean(tooltip),
  };
};
