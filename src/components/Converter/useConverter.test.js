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
  it.todo("should update the USD value");
  it.todo("should recalculate RUB value");
});

describe("when re-render", () => {
  it.todo("should update this value");
});
