import { render, screen } from "@testing-library/react";
import StatsPanel from "./StatsPanel";
import { describe, it, expect } from "vitest";

describe("StatsPanel", () => {
    it("renders the provided stats correctly", () => {
        render(<StatsPanel totalTests={32} passed={12} failed={19} waiting={1} />);

        expect(screen.getByText("32")).toBeInTheDocument();
        expect(screen.getByText("12")).toBeInTheDocument();
        expect(screen.getByText("19")).toBeInTheDocument();
        expect(screen.getByText("1")).toBeInTheDocument();
    });
});
