import { render, screen } from "@testing-library/react";
import { DonutProgress } from "./DonutProgress";
import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom';

describe("DonutProgress", () => {
  it("renderizar", () => {
    render(<DonutProgress percentage={50} />);
    expect(screen.getByText("50%")).toBeInTheDocument();
  });
});
