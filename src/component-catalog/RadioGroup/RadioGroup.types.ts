export interface OptionValues {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface CustomRadioGroupProps {
  options: OptionValues[];

  label?: string;
  helperText?: string;
  error?: boolean;
  direction?: 'row' | 'column';
  disabled?: boolean;
  required?: boolean;

  value?: string | number;
  defaultValue?: string | number;

  onChange?: (value: string) => void;

  name?: string;
}
