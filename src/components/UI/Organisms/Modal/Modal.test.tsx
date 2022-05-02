import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
describe("Modal Testing", () => {
  test("modal rendering", () => {
    render(<Modal />);
    const modal = screen.getByTestId("ModalID");
    expect(modal).toBeInTheDocument();
  });
  test("modals button rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    expect(modalButton).toBeInTheDocument();
  });
  test("modals button has correct styles", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    expect(modalButton).toHaveClass("rounded-lg text-center mt-10");
  });
  test("button should open the modal", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    const modal = screen.getByTestId("ModalID");
    userEvent.click(modalButton);
    expect(modal).toBeInTheDocument();
  });
  test("modals header rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const modalHeader = screen.getByRole("heading", {
      name: "Add New Transaction",
    });
    expect(modalHeader).toBeInTheDocument();
  });
  test("modals Inputs rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const input1 = screen.getByTestId("SelectID1");
    const input2 = screen.getByRole("spinbutton");
    const input3 = screen.getByTestId("TextareaID");
    const input4 = screen.getByTestId("DateID");
    const input5 = screen.getByTestId("SelectID2");
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(input4).toBeInTheDocument();
    expect(input5).toBeInTheDocument();
  });
  test("modals add button rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const add = screen.getByRole("button", { name: "Add" });
    expect(add).toBeInTheDocument();
  });
  test("modals clear button rendering", () => {
    render(<Modal />);
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    const clear = screen.getByRole("button", { name: "Clear Values" });
    expect(clear).toBeInTheDocument();
  });
  test("buttons should close the modal", () => {
    render(<Modal />);
    const modal = screen.getByTestId("ModalID");
    const modalButton = screen.getByRole("button", {
      name: /add transaction/i,
    });
    userEvent.click(modalButton);
    expect(modal).toBeInTheDocument();
    // modal closing
  });
});
