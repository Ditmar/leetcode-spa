export type InputVariants = 'outlined' | 'filled' | 'standard';

export type InputTypes = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';

export const inputModeByType: Record<
  InputTypes,
  React.HTMLAttributes<HTMLInputElement>['inputMode']
> = {
  text: 'text',
  email: 'email',
  password: 'text',
  number: 'numeric',
  tel: 'tel',
  url: 'url',
  search: 'search',
};
