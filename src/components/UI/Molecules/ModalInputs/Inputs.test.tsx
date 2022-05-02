import { render, screen } from "@testing-library/react";
import Inputs from "./Inputs";
describe("Inputs Testing", () => {
  test("inputs rendering", () => {
    render(<Inputs />);
    const inputs = screen.getByRole("spinbutton");
    expect(inputs).toBeInTheDocument();
  });
});
