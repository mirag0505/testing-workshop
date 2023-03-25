import { quotes } from "./quotes";
import { selectRandomQuote } from "./selectRandomQuote";

describe("when called with a quotes list", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.42);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return second (random) quote", () => {
    const result = selectRandomQuote(quotes);
    expect(result).toEqual(quotes[1]);
  });
});
