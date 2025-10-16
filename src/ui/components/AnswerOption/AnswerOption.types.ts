export type AnswerOptionSize = 'small' | 'medium';

export interface AnswerOptionProps {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  size?: AnswerOptionSize;
  className?: string;
}
