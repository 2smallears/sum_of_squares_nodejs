'use strict';

function printSumOfSquares(inputs) {
    const oddElements = findOddElements(inputs);
    const squares = getSquares(oddElements);
    const sumOfSquares = getSumOfSquares(squares);

    console.log(sumOfSquares);
}

function findOddElements(inputs) {
    const oddElements = inputs.filter(input => input % 2 ===1);
    return oddElements;
}

function getSquares(oddElements) {
    return oddElements.map(odd => odd*odd);
}

function getSumOfSquares(squares) {
    return squares.reduce((prv, next) => {
        return prv + next;
    });
}

module.exports = {
    printSumOfSquares: printSumOfSquares,
    findOddElements: findOddElements,
    getSquares: getSquares,
    getSumOfSquares: getSumOfSquares
}