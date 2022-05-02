import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
describe("Card Testing", () => {
  test("card rendering", () => {
    render(<Card />);
    const card = screen.getByTestId("CardID");
    expect(card).toBeInTheDocument();
  });
  test("Cards header rendering", () => {
    render(<Card />);
    const header = screen.getByRole("heading", { name: /total balance/i });
    expect(header).toBeInTheDocument();
  });
  test("Cards header has correct style", () => {
    render(<Card />);
    const header = screen.getByRole("heading", { name: /total balance/i });
    expect(header).toHaveClass("ml-20 mt-24 text-3xl");
  });
  test("has correct styles", () => {
    render(<Card />);
    const card = screen.getByTestId("CardID");
    expect(card).toHaveClass("w-4/12 h-80 rounded-lg ml-20");
  });
  test("tags rendering", () => {
    render(<Card />);
    const tags = screen.getByTestId("TagsID");
    expect(tags).toBeInTheDocument();
  });
  test("inputs header rendering", () => {
    render(<Card />);
    const header = screen.getByRole("heading", {
      name: /initial/i,
    });
    expect(header).toBeInTheDocument();
  });
  test("input rendering", () => {
    render(<Card />);
    const input = screen.getByRole("spinbutton");
    expect(input).toBeInTheDocument();
  });
  test("Total header rendering", () => {
    render(<Card />);
    const totalHeader = screen.getByRole("heading", { name: "Total" });
    expect(totalHeader).toBeInTheDocument();
  });
  test("Total header has correct styles", () => {
    render(<Card />);
    const totalHeader = screen.getByRole("heading", { name: "Total" });
    expect(totalHeader).toHaveClass("ml-[20%] mt-1");
  });
  test("Total output rendering", () => {
    render(<Card />);
    const total = screen.getByText(/1,000,000/i);
    expect(total).toBeInTheDocument();
  });
  test("Total output has correct styles", () => {
    render(<Card />);
    const total = screen.getByText(/1,000,000/i);
    expect(total).toHaveClass("text-center pink text-4xl font-semibold");
  });
  test("Add Transaction button should be in the document", () => {
    render(<Card />);
    const button = screen.getByRole("button", { name: /add transaction/i });
    expect(button).toBeInTheDocument();
  });
  test("Add Transaction button should has correct styles", () => {
    render(<Card />);
    const button = screen.getByRole("button", { name: /add transaction/i });
    expect(button).toHaveClass("rounded-lg text-center mt-10");
  });
  test("Add Transaction button should open the modal", () => {
    render(<Card />);
    const button = screen.getByRole("button", { name: /add transaction/i });
    const modal = screen.getByTestId("ModalID");
    userEvent.click(button);
    expect(modal).toBeInTheDocument();
  });
});
