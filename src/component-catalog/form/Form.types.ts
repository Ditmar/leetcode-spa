import type {
  DefaultValues,
  FieldErrors,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import type { z } from 'zod';
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
  /** Value for the HTML `autocomplete` attribute, e.g. "email" or "new-password". */
  autoComplete?: string;
}

export interface FormProps<T extends FieldValues = FieldValues> {
  fields: FormField[];
  onSubmit: (data: T) => void | Promise<void>;
  defaultValues?: DefaultValues<T>;
  disabled?: boolean;
  submitButtonText?: string;
  resetButtonText?: string;
  showResetButton?: boolean;
  /** Custom Zod schema. When omitted, one is built from `fields`. */
  schema?: z.ZodType;
  /** Errors returned by the server, keyed by field name. They are shown under the field. */
  serverErrors?: Record<string, string>;
}

export type RenderFieldProps<T extends FieldValues = FieldValues> = {
  field: FormField;
  ctrlField: ControllerRenderProps<T, Path<T>>;
  disabled: boolean;
  errors: FieldErrors<T>;
};
