import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Converter } from "./Converter";

// describe("when render", () => {
//   it("rub input need have value rub", () => {
//     render(<Converter />);
//     expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
//   });
//   it("rub input need have value usd", () => {
//     render(<Converter />);
//     expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(1);
//   });
// });

describe("when typed in a RUB input", () => {
  it("rub input need have value rub", () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Сумма в рублях/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(input).toHaveValue(42);
  });
});

describe("when typed in a USD input", () => {
  it("rub input need have value usd", () => {
    render(<Converter />);
    const input = screen.getByLabelText(/Сумма в долларах/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(input).toHaveValue(42);
  });
});
