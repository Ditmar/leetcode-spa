import { useState } from 'react';

interface UseRadioGroupOptions {
  defaultValue?: string;
}

interface UseRadioGroupReturn {
  value: string;
  onChange: (value: string) => void;
  reset: () => void;
}

export const useRadioGroup = ({
  defaultValue = '',
}: UseRadioGroupOptions = {}): UseRadioGroupReturn => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  const reset = () => setValue(defaultValue);

  return { value, onChange, reset };
};
