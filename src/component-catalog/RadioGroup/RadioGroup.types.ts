import type { RadioGroupProps } from "@mui/material";

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface CustomRadioGroupProps
  extends Omit<RadioGroupProps, "row" | "children"> {
  options: Option[];
  label?: string;
  helperText?: string;
  error?: boolean;
  direction?: "row" | "column";
  disabled?: boolean;
  required?: boolean;
}

