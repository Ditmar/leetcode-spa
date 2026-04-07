import { useState, useRef } from 'react';

import { OTP_SINGLE_DIGIT_REGEX, OTP_SANITIZE_REGEX } from './InputOTP.constants';

export function useInputOTP(length: number, disabled?: boolean) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    if (disabled) return;

    const val = e.target.value;

    if (!OTP_SINGLE_DIGIT_REGEX.test(val)) return;

    const newValues = [...values];
    newValues[index] = val;
    setValues(newValues);

    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (disabled) return;

    if (e.key === 'Backspace') {
      if (values[index]) {
        const newValues = [...values];
        newValues[index] = '';
        setValues(newValues);
        return;
      }

      if (index > 0) {
        const newValues = [...values];
        newValues[index - 1] = '';
        setValues(newValues);

        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    if (disabled) return;

    e.preventDefault();

    const pasteData = e.clipboardData.getData('text');
    const sanitized = pasteData.replace(OTP_SANITIZE_REGEX, '');

    if (!sanitized) return;

    const newValues = [...values];

    for (let i = 0; i < length; i++) {
      newValues[i] = sanitized[i] || '';
    }

    setValues(newValues);

    const lastIndex = Math.min(sanitized.length, length) - 1;
    if (lastIndex >= 0) {
      inputRefs.current[lastIndex]?.focus();
    }
  };

  return {
    values,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  };
}
