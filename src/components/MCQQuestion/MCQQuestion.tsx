import { FormLabel, RadioGroup } from '@mui/material';
import React, { useState, useId } from 'react';

import {
  QuestionContainer,
  QuestionText,
  StyledFormControlLabel,
  StyledRadio,
  OptionsGrid,
  QuestionNumber,
  StyledFormControl,
} from './MCQQuestion.styles';

import type { MCQQuestionProps } from './MCQQuestion.types';

export const MCQQuestion: React.FC<MCQQuestionProps> = ({
  question,
  options,
  selectedValue,
  onChange,
  number,
  disabled = false,
}) => {
  const id = useId();
  const questionId = `mcq-${id}`;

  const [internalValue, setInternalValue] = useState<string>('');

  const isControlled = selectedValue !== undefined;
  const currentValue = isControlled ? selectedValue : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange(newValue);
  };

  return (
    <fieldset
      disabled={disabled}
      aria-labelledby={questionId}
      style={{
        border: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
      }}
    >
      <StyledFormControl fullWidth>
        <QuestionContainer>
          <FormLabel id={questionId} component="legend">
            <QuestionText variant="subtitle1">
              {number && <QuestionNumber>{`${number}.`}</QuestionNumber>}
              <span>{question}</span>
            </QuestionText>
          </FormLabel>

          <RadioGroup
            name={`mcq-${number ?? 'question'}`}
            value={currentValue || ''}
            onChange={handleChange}
            aria-labelledby={questionId}
          >
            <OptionsGrid>
              {options.map((opt) => (
                <StyledFormControlLabel
                  key={opt.value}
                  value={opt.value}
                  control={<StyledRadio />}
                  label={opt.label}
                />
              ))}
            </OptionsGrid>
          </RadioGroup>
        </QuestionContainer>
      </StyledFormControl>
    </fieldset>
  );
};
