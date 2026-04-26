import { useState, useRef, useEffect } from 'react';

import { OTP_SINGLE_DIGIT_REGEX, OTP_SANITIZE_REGEX } from './InputOTP.constants';

import type { ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';

export function useInputOTP(
  length: number,
  disabled?: boolean,
  onComplete?: (value: string) => void
) {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));

  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    if (disabled) return;

    const val = e.target.value;

    if (!OTP_SINGLE_DIGIT_REGEX.test(val)) return;

    const newValues = values.slice();
    newValues[index] = val;
    setValues(newValues);

    if (!newValues.includes('')) {
      onComplete?.(newValues.join(''));
    }

    if (val && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (disabled) return;

    if (e.key === 'Backspace') {
      const newValues = values.slice();

      if (values[index]) {
        newValues[index] = '';
        setValues(newValues);
        return;
      }

      if (index > 0) {
        newValues[index - 1] = '';
        setValues(newValues);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>, index: number) => {
    if (disabled) return;

    // Prevent default paste so we can sanitize and distribute pasted digits across inputs
    e.preventDefault();

    const pasteData = e.clipboardData.getData('text');
    const sanitized = pasteData.replace(OTP_SANITIZE_REGEX, '');

    if (!sanitized) return;

    const newValues = values.slice();

    for (let i = 0; i < sanitized.length; i++) {
      if (index + i < length) {
        newValues[index + i] = sanitized[i];
      }
    }

    setValues(newValues);

    if (!newValues.includes('')) {
      onComplete?.(newValues.join(''));
    }

    const lastIndex = Math.min(index + sanitized.length - 1, length - 1);
    inputRefs.current[lastIndex]?.focus();
  };

  useEffect(() => {
    setValues(Array(length).fill(''));
    inputRefs.current = Array(length).fill(null);
  }, [length]);

  return {
    values,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  };
}
