import { z } from 'zod';

const baseSchema = {
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
};

export const signInSchema = z.object({
  ...baseSchema,
  rememberMe: z.boolean().optional(),
});

export const signUpSchema = z
  .object({
    ...baseSchema,
    fullName: z.string().min(2, 'Full name is required'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
