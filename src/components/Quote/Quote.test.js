import { render, screen } from "@testing-library/react";
import { Quote } from "./Quote";
import { quotes } from "./quotes";

describe("when render", () => {
  const stub = quotes[1];
  const { text, author } = stub;

  it("should contain an expected text", () => {
    render(<Quote />);
    const result = screen.getByText(new RegExp(text));

    expect(result).toBeInTheDocument();
  });

  it("should contain an expected author", () => {
    render(<Quote />);
    const result = screen.getByText(new RegExp(author));

    expect(result).toBeInTheDocument();
  });
});
