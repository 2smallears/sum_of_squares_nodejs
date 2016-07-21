'use strict';

const test = require('../src/main');

describe('sum of squares', () => {
    const inputs = [1,2,3,4,5];

    it('should print right result', () => {
        spyOn(console,'log');
        test.printSumOfSquares(inputs);
        const sumOfSquares = 35;
        expect(console.log).toHaveBeenCalledWith(sumOfSquares);
    });
});