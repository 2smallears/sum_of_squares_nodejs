'use static';

const test = require('../src/main');

describe('sum of squares', () => {
    const inputs = [1,2,3,4,5];

    it('find odd elements', () => {
        const oddElements = test.findOddElements(inputs);
        const expectOddElements = [1,3,5];
        expect(oddElements).toEqual(expectOddElements);
    });

    it('get squares', () => {
        const oddElements = [1,3,5];
        const squares = test.getSquares(oddElements);
        const expectSquares = [1,9,25];
        expect(squares).toEqual(expectSquares);
    });

    it('get sum of squares', () => {
        const squares = [1,9,25];
        const sumOfSquares = test.getSumOfSquares(squares);
        const expectSumOfSquares = 35;

        expect(sumOfSquares).toEqual(expectSumOfSquares);
    });

    it('should print right result', () => {
        spyOn(console,'log');
        test.printSumOfSquares(inputs);
        const sumOfSquares = 35;
        expect(console.log).toHaveBeenCalledWith(sumOfSquares);
    });
});

