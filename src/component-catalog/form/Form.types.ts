import type { DefaultValues, FieldErrors } from 'react-hook-form';

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox';

export type Option = {
  label: string;
  value: string | number;
};

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  span?: number;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
  required?: boolean;
  options?: Option[];
}

export interface FormProps<T extends Record<string, unknown> = Record<string, unknown>> {
  fields: FormField[];
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  disabled?: boolean;
  submitButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
}

export type RenderFieldProps = {
  field: FormField;
  ctrlField: {
    value: unknown;
    onChange: (value: unknown) => void;
  };
  disabled: boolean;
  errors: FieldErrors;
};
