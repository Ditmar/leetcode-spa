import { Box } from '@mui/material';

import { DEFAULT_OTP_LENGTH, OTP_INPUT_PATTERN } from './InputOTP.constants';
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
  const {
    values,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  } = useInputOTP(length, disabled, onComplete);

  return (
    <Container role="group" aria-label="One-time password input">
      <Label>{label || 'Enter OTP Code'}</Label>
      <Box display="flex" alignItems="center" gap={1}>
        {Array.from({ length }).map((_, index) => {
          const isFirst = index === 0;
          const isLast = index === length - 1;

          return (
            <StyledTextField
              key={index}
              name={`otp-${index}`}
              value={values[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={(e) => handlePaste(e, index)}
              inputRef={(el) => (inputRefs.current[index] = el)}
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
