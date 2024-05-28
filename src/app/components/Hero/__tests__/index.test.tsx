import { render, screen } from "@testing-library/react";
import Hero from "..";

describe("Hero", () => {
  it("should render hero section", () => {
    render(<Hero />);
    expect(screen.getByText("Welcome to TokoTok")).toBeInTheDocument();
  });
});
