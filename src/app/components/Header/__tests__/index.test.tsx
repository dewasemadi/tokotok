import { render, screen } from "@testing-library/react";
import Header from "..";

describe("Header", () => {
  it("should render header without error", async () => {
    render(<Header />);
    expect(await screen.findByText(/Toko/)).toBeInTheDocument();
  });
});
