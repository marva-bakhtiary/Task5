import { render, screen } from "@testing-library/react";
import CheckTags from "./CheckTags";

describe("CheckTags Testing", () => {
  test("checktags rendering", () => {
    render(<CheckTags />);
    const checktag1 = screen.getByText("None");
    const checktag2 = screen.getByText("Month");
    const checktag3 = screen.getByText("Day");
    const checktag4 = screen.getByText("Category");
    const checktag5 = screen.getByText("Type");
    expect(checktag1).toBeInTheDocument();
    expect(checktag2).toBeInTheDocument();
    expect(checktag3).toBeInTheDocument();
    expect(checktag4).toBeInTheDocument();
    expect(checktag5).toBeInTheDocument();
  });
});
