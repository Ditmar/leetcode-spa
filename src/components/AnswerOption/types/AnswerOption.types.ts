//Corrección: Convención de nombres Props y Named Exports
export interface AnswerOptionProps {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  variant?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  className?: string;
}
