import { z } from 'zod';

import type { FormField } from './Form.types';

export const getInputMode = (type: string): 'text' | 'email' | 'search' | 'url' => {
  if (type === 'email') return 'email';
  if (type === 'search') return 'search';
  return 'text';
};

export const buildFormSchema = (fields: FormField[]) => {
  const shape: Record<string, z.ZodTypeAny> = {};

  fields.forEach((field) => {
    if (field.type === 'email') {
      shape[field.name] = z
        .string()
        .min(1, `${field.label} is required`)
        .email(`Invalid ${field.label.toLowerCase()}`);
    } else if (field.type === 'password') {
      shape[field.name] = z.string().min(6, 'Password must be at least 6 characters');
    } else if (field.type === 'checkbox' && field.required) {
      shape[field.name] = z.boolean().refine((v) => v === true, `${field.label} must be accepted`);
    } else if (field.required) {
      shape[field.name] = z.string().min(1, `${field.label} is required`);
    } else {
      shape[field.name] = z.union([z.boolean()]).optional();
    }
  });

  return z.object(shape);
};
