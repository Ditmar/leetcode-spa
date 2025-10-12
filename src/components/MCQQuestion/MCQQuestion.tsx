import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, Box } from "@mui/material";
import {
    QuestionContainer,
    QuestionText,
    StyledFormControlLabel,
    StyledRadio,
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

            <FormControl
                component="fieldset"
                disabled={disabled}
                fullWidth
                aria-labelledby={`question-${number ?? "label"}`}
                sx={{ width: "100%", margin: 0, padding: 0 }}
            >
                <QuestionContainer>
                    <FormLabel id={`question-${number ?? "label"}`} component="legend">
                        <QuestionText variant="subtitle1">
                            {number && (
                                <span style={{ marginRight: "-2px" }}>
                                    {number}.
                                </span>
                            )}
                            <span>{question}</span>
                        </QuestionText>
                    </FormLabel>

                    <RadioGroup
                        name={`mcq-${number || "question"}`}
                        value={currentValue}
                        onChange={handleChange}
                    >
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: options.length > 2 ? "1fr 1fr" : "1fr",
                                },
                                gap: 1.5,
                            }}
                        >
                            {options.map((opt) => (
                                <StyledFormControlLabel
                                    key={opt.value}
                                    value={opt.value}
                                    control={<StyledRadio />}
                                    label={opt.label}
                                />
                            ))}
                        </Box>
                    </RadioGroup>
                </QuestionContainer>
            </FormControl>
        </>
    );
};