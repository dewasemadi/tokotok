import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "..";

describe("Modal", () => {
  it("should render title and call onClose", async () => {
    const onClose = jest.fn();
    render(
      <Modal title="Test Modal" open={true} onClose={onClose}>
        <div>Test child</div>
      </Modal>
    );

    expect(await screen.findByText("Test Modal")).toBeInTheDocument();
    expect(await screen.findByText("Test child")).toBeInTheDocument();

    fireEvent.click(await screen.findByRole("button"));
    expect(onClose).toHaveBeenCalled();
  });

  it("should not render when open is false", () => {
    const { container } = render(
      <Modal title="Test Modal" open={false} onClose={() => {}}>
        <div>Test child</div>
      </Modal>
    );

    expect(container.firstChild).toBeNull();
  });
});
