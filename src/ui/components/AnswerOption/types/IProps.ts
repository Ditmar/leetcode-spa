export type AnswerOptionSize = 'small' | 'medium';
export type AnswerOptionVariant = 'default' | 'filled';

export interface IProps {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: AnswerOptionSize;
  variant?: AnswerOptionVariant;
  className?: string;
}
