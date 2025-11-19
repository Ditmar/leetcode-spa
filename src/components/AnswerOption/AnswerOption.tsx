import { Button } from '@mui/material';
import React from 'react';

export interface AnswerOptionProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export const AnswerOption: React.FC<AnswerOptionProps> = ({ label, selected = false, onClick }) => {
  return (
    <Button
      fullWidth
      variant={selected ? 'contained' : 'outlined'}
      color={selected ? 'primary' : 'inherit'}
      onClick={onClick}
      sx={{
        justifyContent: 'flex-start',
        textTransform: 'none',
        mb: 1,
      }}
    >
      {label}
    </Button>
  );
};
