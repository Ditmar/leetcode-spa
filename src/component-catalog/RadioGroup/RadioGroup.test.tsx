import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { RadioGroup } from "./RadioGroup";

const options = [
  { label: "Option One", value: "1" },
  { label: "Option Two", value: "2" },
];

describe("RadioGroup", () => {
  it("renders all options", () => {
    const { getByLabelText } = render(<RadioGroup options={options} />);

    expect(getByLabelText("Option One")).toBeTruthy();
    expect(getByLabelText("Option Two")).toBeTruthy();
  });

  it("selects an option on click", () => {
    const { getByLabelText } = render(<RadioGroup options={options} />);

    const option = getByLabelText("Option One") as HTMLInputElement;
    fireEvent.click(option);

    expect(option.checked).toBe(true);
  });

  it("disables an individual option", () => {
    const { getByLabelText } = render(
      <RadioGroup options={[{ label: "Option One", value: "1", disabled: true }]} />
    );

    expect((getByLabelText("Option One") as HTMLInputElement).disabled).toBe(true);
  });

  it("disables all options when group is disabled", () => {
    const { getByLabelText } = render(<RadioGroup disabled options={options} />);

    expect((getByLabelText("Option One") as HTMLInputElement).disabled).toBe(true);
    expect((getByLabelText("Option Two") as HTMLInputElement).disabled).toBe(true);
  });

  it("shows error styles when error prop is true", () => {
    const { container } = render(
      <RadioGroup error helperText="Something went wrong" options={options} />
    );

    expect(container.querySelector(".Mui-error")).toBeTruthy();
  });

  it("forwards aria-required to the radiogroup", () => {
    const { getByRole } = render(
      <RadioGroup required options={options} label="Pick one" />
    );

    expect(getByRole("radiogroup").getAttribute("aria-required")).toBe("true");
  });
});
