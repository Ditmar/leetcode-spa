import { Button } from '@mui/material';
import React from 'react';

export interface AnswerOptionProps {
  label: string;
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const AnswerOptionComponent: React.FC<AnswerOptionProps> = ({
  label,
  selected = false,
  onClick,
}) => {
  return (
    <Button
      fullWidth
      variant={selected ? 'contained' : 'outlined'}
      color="primary"
      aria-pressed={selected}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export const AnswerOption = React.memo(AnswerOptionComponent);
