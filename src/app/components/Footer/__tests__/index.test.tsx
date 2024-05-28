import { render, screen } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("should render Footer", async () => {
    render(<Footer />);
    expect(await screen.findByText(/Copyright/)).toBeInTheDocument();
  });
});
