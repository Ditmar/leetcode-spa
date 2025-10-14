export interface MCQOption {
    label: string;
    value: string;
}

export interface MCQQuestionProps {
    question: string;
    options: MCQOption[];
    selectedValue?: string | null;
    onChange: (value: string) => void;
    number?: number;
    disabled?: boolean;
}