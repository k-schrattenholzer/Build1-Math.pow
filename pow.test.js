const toThePowerOf = require("./pow.js");

describe('pow', () => {
    it('should take a base and exponent and raise the base to the exponent power', () => {

        const expected = 343;

        const result = toThePowerOf(7, 3);

        expect(result).toEqual(expected);

    });
});