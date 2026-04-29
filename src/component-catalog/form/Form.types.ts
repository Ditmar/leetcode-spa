import type {
  DefaultValues,
  FieldErrors,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';

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

export interface FormProps<T extends FieldValues = FieldValues> {
  fields: FormField[];
  onSubmit: (data: T) => void;
  defaultValues?: DefaultValues<T>;
  disabled?: boolean;
  submitButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
}

export type RenderFieldProps<T extends FieldValues = FieldValues> = {
  field: FormField;
  ctrlField: ControllerRenderProps<T, Path<T>>;
  disabled: boolean;
  errors: FieldErrors<T>;
};
