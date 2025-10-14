import React, { useState } from "react";
import { FormLabel, RadioGroup } from "@mui/material";
import {
    QuestionContainer,
    QuestionText,
    StyledFormControlLabel,
    StyledRadio,
    OptionsGrid,
    QuestionNumber,
    StyledFormControl,
} from "./MCQQuestion.styles";
import type { MCQQuestionProps } from "./MCQQuestion.types";

export const MCQQuestion: React.FC<MCQQuestionProps> = ({
    question,
    options,
    selectedValue,
    onChange,
    number,
    disabled = false,
}) => {
    const [internalValue, setInternalValue] = useState<string>("");
    const currentValue = selectedValue ?? internalValue;
    const questionId = `question-${number ?? "label"}`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (selectedValue === undefined) setInternalValue(newValue);
        onChange?.(newValue);
    };

    const globalReset = `
        body, #root, #storybook-root {
            margin: 0 !important;
            padding: 0 !important;
            background: none !important;
        }
    `;

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600&family=Montserrat:wght@600&display=swap');
                    ${globalReset}
                `}
            </style>

            <StyledFormControl
                component="fieldset"
                disabled={disabled}
                fullWidth
                aria-labelledby={questionId}
                aria-describedby={`${questionId}-desc`}
                aria-disabled={disabled}
                role="group"
            >
                <QuestionContainer tabIndex={0}>
                    <FormLabel id={questionId} component="legend">
                        <QuestionText variant="subtitle1">
                            {number && <QuestionNumber>{number}.</QuestionNumber>}
                            <span>{question}</span>
                        </QuestionText>
                    </FormLabel>

                    <RadioGroup
                        name={`mcq-${number || "question"}`}
                        value={currentValue}
                        onChange={handleChange}
                        role="radiogroup"
                        aria-labelledby={questionId}
                    >
                        <OptionsGrid>
                            {options.map((opt) => (
                                <StyledFormControlLabel
                                    key={opt.value}
                                    value={opt.value}
                                    control={<StyledRadio />}
                                    label={opt.label}
                                    aria-checked={currentValue === opt.value}
                                    aria-disabled={disabled}
                                    role="radio"
                                />
                            ))}
                        </OptionsGrid>
                    </RadioGroup>
                </QuestionContainer>
            </StyledFormControl>
        </>
    );
};