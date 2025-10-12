import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MCQQuestion } from "./MCQQuestion";
import { describe, expect, it, vi } from "vitest";

describe("MCQQuestion Component", () => {
    const options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
    ];

    it("renders the question text", () => {
        render(
            <MCQQuestion
                question="Sample Question"
                options={options}
                onChange={() => { }}
            />
        );
        expect(screen.getByText("Sample Question")).toBeInTheDocument();
    });

    it("calls onChange when selecting an option", () => {
        const handleChange = vi.fn();
        render(
            <MCQQuestion
                question="Q"
                options={options}
                onChange={handleChange}
            />
        );
        fireEvent.click(screen.getByLabelText("Option 1"));
        expect(handleChange).toHaveBeenCalledWith("1");
    });

    it("marks the selected option as checked", () => {
        render(
            <MCQQuestion
                question="Q"
                options={options}
                selectedValue="2"
                onChange={() => { }}
            />
        );
        const radio = screen.getByLabelText("Option 2") as HTMLInputElement;
        expect(radio.checked).toBe(true);
    });

    it("renders correctly with long question text", () => {
        const longText =
            "This is a very long question text that should wrap gracefully across multiple lines and remain fully visible without breaking layout or overflowing.";
        render(
            <MCQQuestion
                question={longText}
                options={options}
                onChange={() => { }}
            />
        );
        const questionElement = screen.getByText(/This is a very long question text/i);
        expect(questionElement).toBeInTheDocument();
    });
});
