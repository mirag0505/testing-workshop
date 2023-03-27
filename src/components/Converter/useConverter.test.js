import { act, renderHook } from "@testing-library/react";
import { useConverter } from "./useConverter";

const course = 42;
const testRubAmount = 100;
const calculatedUsdAmount = 2.38;

describe("when render", () => {
  it("RUB input should have a value equal to initial RUB amount", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));
    expect(result.current.rub).toEqual(testRubAmount);
  });
  it("USD input should have a value equal to calculated USD amount", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));
    expect(result.current.usd).toEqual(calculatedUsdAmount);
  });
});

describe("when called update method 'updateRUB'", () => {
  it("should update the RUB value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.rub).toEqual(10);
  });

  it("should recalculate USD value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateRub(10);
    });

    expect(result.current.usd).toEqual(0.24);
  });
});

describe("when called update method 'updateUsd'", () => {
  it("should update the USD value", () => {
    const { result } = renderHook(() => useConverter(testRubAmount, course));

    act(() => {
      result.current.updateUsd(10);
    });

    expect(result.current.usd).toEqual(10);
  });
  it("should recalculate RUB value", () => {});
});

describe("when re-render", () => {
  it("should update this value", () => {
    const { result, rerender } = renderHook(
      ({ value, course }) => useConverter(value, course),
      {
        initialProps: {
          value: testRubAmount,
          course,
        },
      }
    );

    rerender({ value: 10, course: 50 });

    const { rub, usd } = result.current;
    expect(rub).toEqual(10);
    expect(usd).toEqual(0.2);
  });
});
