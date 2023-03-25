import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";

describe("when render", () => {
  it("should contain an expected text", () => {
    render(<Quote />);
    const result = screen.getByText(/Test Quote/);

    expect(result).toBeInTheDocument();
  });
});
