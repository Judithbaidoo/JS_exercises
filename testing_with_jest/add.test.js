const add = require('./add');

describe('math', () => {
    it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
    });
});