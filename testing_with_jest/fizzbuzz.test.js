const fizzBuzz = require('./fizzbuzz');

describe('check', () => {
    
    test("check fizzbuzz value", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
    });

    test("check fizz value ", () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    })

});
