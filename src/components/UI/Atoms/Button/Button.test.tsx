import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button Testig", () => {
  test("button rendering", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("button has correct styles", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("rounded-lg text-center mt-10");
  });
  test("button has correct classes", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("ant-btn ant-btn-primary ant-btn-block");
  });

  test("button has correct attributes", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "button");
  });
  test("have correct content", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Add Transaction");
  });
  test.only("have correct attributes", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByTestId("atnBTN");
    expect(button).toHaveAttribute("size", "middle");
  });
  test("focus on click", () => {
    render(<Button Click={() => alert("s.th")} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toHaveFocus();
  });
});
