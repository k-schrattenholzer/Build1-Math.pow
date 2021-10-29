const raisedToThePowerOf = require("./pow.js");

describe('pow', () => {
    it('should take a base and exponent and raise the base to the exponent power', () => {

        const expected = 343;

        const result = raisedToThePowerOf(7, 3);

        expect(result).toEqual(expected);

    });
});