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
    let schema: z.ZodTypeAny;

    switch (field.type) {
      case 'email':
        schema = z.string().email(`Invalid ${field.label.toLowerCase()}`);
        break;

      case 'password':
        schema = z.string().min(6, 'Password must be at least 6 characters');
        break;

      case 'checkbox':
        schema = z.boolean();
        if (field.required) {
          schema = schema.refine((v) => v === true, {
            message: `${field.label} must be accepted`,
          });
        }
        break;

      case 'select':
      case 'radio':
        schema = z.union([z.string(), z.number()]);
        break;

      case 'textarea':
      case 'text':
      case 'search':
      default:
        schema = z.string();
        break;
    }

    if (field.required && field.type !== 'checkbox') {
      schema = schema.refine((val) => val !== '' && val !== null && val !== undefined, {
        message: `${field.label} is required`,
      });
    } else if (!field.required) {
      schema = schema.optional();
    }

    shape[field.name] = schema;
  });

  return z.object(shape);
};
