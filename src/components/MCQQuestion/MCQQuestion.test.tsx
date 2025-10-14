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
            <MCQQuestion question="Q" options={options} onChange={handleChange} />
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
        render(<MCQQuestion question={longText} options={options} onChange={() => { }} />);
        expect(screen.getByText(/This is a very long question text/i)).toBeInTheDocument();
    });

    it("has appropriate ARIA roles and attributes for accessibility", () => {
        render(
            <MCQQuestion
                number={1}
                question="Accessible Question"
                options={options}
                onChange={() => { }}
            />
        );

        const radioGroup = screen.getByRole("radiogroup");
        expect(radioGroup).toBeInTheDocument();

        const radios = screen.getAllByRole("radio").filter(
            (el) => el.tagName.toLowerCase() === "input"
        );
        expect(radios.length).toBe(2);

        radios[0].focus();
        expect(radios[0]).toHaveFocus();
    });

    it("updates the checked state when selectedValue prop changes", () => {
        const { rerender } = render(
            <MCQQuestion question="Q" options={options} selectedValue="1" onChange={() => { }} />
        );

        let radio1 = screen.getByLabelText("Option 1") as HTMLInputElement;
        let radio2 = screen.getByLabelText("Option 2") as HTMLInputElement;
        expect(radio1.checked).toBe(true);
        expect(radio2.checked).toBe(false);

        rerender(
            <MCQQuestion question="Q" options={options} selectedValue="2" onChange={() => { }} />
        );
        radio1 = screen.getByLabelText("Option 1") as HTMLInputElement;
        radio2 = screen.getByLabelText("Option 2") as HTMLInputElement;
        expect(radio1.checked).toBe(false);
        expect(radio2.checked).toBe(true);
    });

    it("disables all options when disabled prop is true", () => {
        render(
            <MCQQuestion
                question="Disabled question"
                options={options}
                disabled
                onChange={() => { }}
            />
        );

        const inputs = screen.getAllByRole("radio").filter(
            (el) => el.tagName.toLowerCase() === "input"
        );

        inputs.forEach((input) => {
            expect(input).toBeDisabled();
        });
    });

    it("renders the question number when provided", () => {
        render(
            <MCQQuestion
                number={3}
                question="Which option?"
                options={options}
                onChange={() => { }}
            />
        );
        expect(screen.getByText("3.")).toBeInTheDocument();
    });
});