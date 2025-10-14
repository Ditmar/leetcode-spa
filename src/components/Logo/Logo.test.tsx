import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Logo } from "./Logo";

vi.mock("../../assets/logo.svg", () => ({
  default: { src: "mocked_logo.svg" },
}));
vi.mock("../../assets/full_logo.svg", () => ({
  default: { src: "mocked_full_logo.svg" },
}));

describe("Logo component", () => {
  it("debería renderizar el logo vertical por defecto", () => {
    render(<Logo orientation="vertical" width={100} height={50} />);

    const img = screen.getByAltText("logo_app") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("mocked_logo.svg");
    expect(img.width).toBe(100);
    expect(img.height).toBe(50);
  });

  it("debería renderizar el logo horizontal cuando la orientación es 'horizontal'", () => {
    render(<Logo orientation="horizontal" width={120} height={60} />);

    const img = screen.getByAltText("logo_app") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toContain("mocked_full_logo.svg");
    expect(img.width).toBe(120);
    expect(img.height).toBe(60);
  });
});
