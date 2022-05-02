import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input Testing", () => {
  test("input rendering", () => {
    render(<Input />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });
  test("should focus on click", () => {
    render(<Input />);
    const input = screen.getByRole("spinbutton");
    userEvent.click(input);
    expect(input).toHaveFocus();
  });
  test("check the default value", () => {
    render(<Input />);
    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue("0");
  });
  test("inputs header rendering", () => {
    render(<Input />);
    const header = screen.getByRole("heading", {
      name: /initial/i,
    });
    expect(header).toBeInTheDocument();
  });
  test("inputs header has cirrect styles", () => {
    render(<Input />);
    const header = screen.getByRole("heading", {
      name: /initial/i,
    });
    expect(header).toHaveClass("ml-[20%] mt-4");
  });
 
});
