import React from 'react';
import type { PillTagProps } from './PillTag.types';
import { PillTagStyled } from './PillTag.styles';
import {
    PILL_TAG_VARIANTS,
    VALIDATION_MESSAGES,
    type PillTagVariant,
} from './PillTag.constants';

export const PillTag: React.FC<PillTagProps> = ({
    label,
    variant = 'primary',
    'data-testid': dataTestId = 'pill-tag',
    ...rest
}) => {
    if (!label || label.trim() === '') {
        if (process.env.NODE_ENV === 'development') {
            console.warn(VALIDATION_MESSAGES.EMPTY_LABEL);
        }
        return null;
    }
    const isValidVariant = PILL_TAG_VARIANTS.includes(variant);

    if (!isValidVariant && process.env.NODE_ENV === 'development') {
        console.warn(VALIDATION_MESSAGES.INVALID_VARIANT(variant));
    }

    const validVariant: PillTagVariant = isValidVariant ? variant : 'primary';

    return (
        <PillTagStyled
            label={label}
            pillVariant={validVariant}
            data-testid={dataTestId}
            {...rest}
        />
    );
};

export default PillTag;