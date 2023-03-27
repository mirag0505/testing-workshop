import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Converter } from "./Converter";
// import { useConverter } from "./useConverter";

const mockUpdateRub = jest.fn();
const mockUpdateUsd = jest.fn();

// jest.mock("./useConverter", () => ({
//   useConverter() {
//     return {
//       rub: 100,
//       usd: 2.38,
//       updateRub: mockUpdateRub,
//       updateUsd: mockUpdateUsd,
//     };
//   },
// }));

function useConverterMock() {
  return {
    rub: 100,
    usd: 2.38,
    updateRub: mockUpdateRub,
    updateUsd: mockUpdateUsd,
  };
}

describe("when render", () => {
  it("rub input need have value rub", () => {
    render(<Converter useConverter={useConverterMock} />);
    expect(screen.getByLabelText(/Сумма в рублях/)).toHaveValue(100);
  });
  it("rub input need have value usd", () => {
    render(<Converter useConverter={useConverterMock} />);
    expect(screen.getByLabelText(/Сумма в долларах/)).toHaveValue(2.38);
  });
});

describe("when typed in a RUB input", () => {
  it("rub input need have value rub", () => {
    render(<Converter useConverter={useConverterMock} />);
    const input = screen.getByLabelText(/Сумма в рублях/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(mockUpdateRub).toHaveBeenCalledWith("42");
  });
});

describe("when typed in a USD input", () => {
  it("rub input need have value usd", () => {
    render(<Converter useConverter={useConverterMock} />);
    const input = screen.getByLabelText(/Сумма в долларах/);

    userEvent.clear(input);
    userEvent.type(input, "42");
    expect(mockUpdateUsd).toHaveBeenCalledWith("42");
  });
});
