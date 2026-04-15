import { useState, useRef } from 'react';

import { OTP_SINGLE_DIGIT_REGEX, OTP_SANITIZE_REGEX } from './InputOTP.constants';

export function useInputOTP(
  length: number,
  disabled?: boolean,
  onComplete?: (value: string) => void
) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));

  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(length).fill(null));

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
    if (!newValues.includes('')) {
      onComplete?.(newValues.join(''));
    }

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

  const handlePaste = (e: React.ClipboardEvent, index: number) => {
    if (disabled) return;

    e.preventDefault();
    const pasteData = e.clipboardData.getData('text');
    const sanitized = pasteData.replace(OTP_SANITIZE_REGEX, '');

    if (!sanitized) return;

    const newValues = [...values];

    for (let i = 0; i < sanitized.length; i++) {
      if (index + i < length) {
        newValues[index + i] = sanitized[i];
      }
    }

    setValues(newValues);
    const otp = newValues.join('');
    if (otp.length === length && !newValues.includes('')) {
      onComplete?.(otp);
    }

    const lastIndex = Math.min(index + sanitized.length - 1, length - 1);
    inputRefs.current[lastIndex]?.focus();
  };

  return {
    values,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  };
}
