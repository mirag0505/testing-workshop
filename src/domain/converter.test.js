import { rubToUsd } from "./converter";

describe("when converted to rub to ust", () => {
  it("should return a correct converted amount", () => {
    const result = rubToUsd(10, 50);
    expect(result).toEqual(0.2);
  });
});

describe("when converted to ust to rub", () => {
  it("should return a correct converted amount", () => {
    const testCases = [
      { usd: 10, course: 10, rub: 100 },
      { usd: 10, course: 1.5, rub: 15 },
      { usd: 10, course: 3.1415454, rub: 31.42 },
    ];

    testCases.forEach(({ usd, course, rub }) => {
      const result = rubToUsd(usd, course, rub);
      expect(result).toEqual(result);
    });
  });
});
