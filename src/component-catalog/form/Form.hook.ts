import { zodResolver } from '@hookform/resolvers/zod';
import {
  useForm as useReactHookForm,
  type UseFormReturn,
  type DefaultValues,
} from 'react-hook-form';
import { z } from 'zod';

export const useFormHook = <T extends z.ZodTypeAny>(
  schema?: T,
  defaultValues?: DefaultValues<z.infer<T>>
): UseFormReturn<z.infer<T>> => {
  return useReactHookForm<z.infer<T>>({
    resolver: schema ? zodResolver(schema) : undefined,
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });
};
