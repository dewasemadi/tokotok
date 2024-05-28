import { fireEvent, render, screen } from "@testing-library/react";
import ProductItem from "..";
import { PRODUCT } from "../__data_mocks__/product";

describe("ProductItem", () => {
  it("should render items", () => {
    render(<ProductItem data={PRODUCT} />);

    PRODUCT.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.id.toString())).toBeInTheDocument();
    });
  });

  it("should open modal on card click", async () => {
    render(<ProductItem data={PRODUCT} />);

    fireEvent.click(await screen.findByTestId("product-item-0"));
    expect(await screen.findAllByText("Product 1")).toHaveLength(2); // card and modal
  });

  it("should close modal on close button click", async () => {
    render(<ProductItem data={PRODUCT} />);

    fireEvent.click(await screen.findByTestId("product-item-0"));
    fireEvent.click(await screen.findByTestId("close-button"));
    expect(await screen.findAllByText("Product 1")).toHaveLength(1); // card only
  });

  it("should render unknown name if name is not provided", () => {
    render(<ProductItem data={[{ ...PRODUCT[0], name: "" }]} />);

    expect(screen.getByText("Unknown")).toBeInTheDocument();
  });
});
