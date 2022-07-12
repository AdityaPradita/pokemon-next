import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
  it.each`
    number | result
    ${2}   | ${"Fizz"}
    ${3}   | ${"Buzz"}
  `('returns "Fizz" if the number is even', ({ number, result }) => {
    expect(FizzBuzz(number)).toEqual(result);
  });
});
