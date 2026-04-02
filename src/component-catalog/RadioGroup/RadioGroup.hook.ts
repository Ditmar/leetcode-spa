import { useState } from 'react';

interface UseRadioGroupOptions {
  defaultValue?: string;
}

interface UseRadioGroupReturn {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export const useRadioGroup = ({
  defaultValue = '',
}: UseRadioGroupOptions = {}): UseRadioGroupReturn => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    setValue(event.target.value);
  };

  const reset = () => setValue(defaultValue);
  
  return { value, onChange, reset };
};
