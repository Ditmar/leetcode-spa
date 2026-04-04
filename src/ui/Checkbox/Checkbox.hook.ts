import { useControlled } from '@mui/material/utils';
import { useState } from 'react';

export const useCheckboxState = ({
  checked: checkedProp,
  defaultChecked,
}: {
  checked?: boolean;
  defaultChecked?: boolean;
}) => {
  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: defaultChecked ?? false,
    name: 'Checkbox',
    state: 'checked',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return { checked, handleChange };
};