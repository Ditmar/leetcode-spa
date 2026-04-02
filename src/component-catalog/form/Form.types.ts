export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox';

export interface Option {
  label: string;
  value: string | number;
}

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

export interface FormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, unknown>) => void;
  defaultValues?: Record<string, unknown>;
  disabled?: boolean;
  submitButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
}
