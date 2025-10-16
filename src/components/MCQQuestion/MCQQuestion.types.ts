export interface MCQOption {
  label: string;
  value: string;
}

export interface MCQQuestionProps {
  question: string;
  options: MCQOption[];
  /** Currently selected value (controlled mode).
      If not passed, the component is uncontrolled */
  selectedValue?: string;
  onChange: (value: string) => void;
  number?: number;
  disabled?: boolean;
}
