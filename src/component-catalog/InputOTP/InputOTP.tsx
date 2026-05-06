import { Box } from '@mui/material';
import { useCallback } from 'react';

import { DEFAULT_OTP_LENGTH, OTP_INPUT_PATTERN, DEFAULT_OTP_LABEL } from './InputOTP.constants';
import { useInputOTP } from './InputOTP.hook';
import { Container, StyledTextField, Label } from './InputOTP.styles';

import type { InputOTPProps } from './InputOTP.types';

export function InputOTP({
  length = DEFAULT_OTP_LENGTH,
  disabled = false,
  error = false,
  onComplete,
  label,
}: InputOTPProps) {
  const { values, inputRefs, handleChange, handleKeyDown, handlePaste } = useInputOTP(
    length,
    disabled,
    onComplete
  );

  const handleChangeAt = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      handleChange(e, index);
    },
    [handleChange]
  );

  const handleKeyDownAt = useCallback(
    (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      handleKeyDown(e, index);
    },
    [handleKeyDown]
  );

  const handlePasteAt = useCallback(
    (index: number) => (e: React.ClipboardEvent<HTMLInputElement>) => {
      handlePaste(e, index);
    },
    [handlePaste]
  );

  const setInputRef = useCallback(
    (index: number) => (el: HTMLInputElement | null) => {
      inputRefs.current[index] = el;
    },
    [inputRefs]
  );

  return (
    <Container role="group" aria-label="One-time password input">
      <Label>{label || DEFAULT_OTP_LABEL}</Label>

      <Box display="flex" alignItems="center" gap={1}>
        {Array.from({ length }).map((_, index) => {
          const isFirst = index === 0;
          const isLast = index === length - 1;

          return (
            <StyledTextField
              key={index}
              name={`otp-${index}`}
              value={values[index]}
              onChange={handleChangeAt(index)}
              onKeyDown={handleKeyDownAt(index)}
              onPaste={handlePasteAt(index)}
              inputRef={setInputRef(index)}
              isFirst={isFirst}
              isLast={isLast}
              disabled={disabled}
              error={error}
              inputProps={{
                maxLength: 1,
                inputMode: 'numeric',
                pattern: OTP_INPUT_PATTERN,
                'aria-label': `Digit ${index + 1} of ${length}`,
              }}
            />
          );
        })}
      </Box>
    </Container>
  );
}
