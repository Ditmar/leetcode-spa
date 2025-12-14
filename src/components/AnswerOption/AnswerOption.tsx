import { Button } from '@mui/material';
import { memo } from 'react';

import type { FC, MouseEventHandler } from 'react';

export interface AnswerOptionProps {
  label: string;
  selected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const AnswerOptionComponent: FC<AnswerOptionProps> = ({ label, selected = false, onClick }) => {
  return (
    <Button
      fullWidth
      variant={selected ? 'contained' : 'outlined'}
      color="primary"
      aria-pressed={selected} // ✅ comunica el estado seleccionado
      onClick={onClick}
      role="option"
    >
      {label}
    </Button>
  );
};

export const AnswerOption = memo(AnswerOptionComponent);
