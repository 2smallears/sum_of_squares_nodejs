'use strict';

function printSumOfSquares(inputs) {
    const oddElements = inputs.filter(input => input % 2 ===1)
        .map(odd => odd*odd).reduce((prv, next) => {
        return prv + next;
    });

    console.log(oddElements);
}
module.exports = {
    printSumOfSquares: printSumOfSquares
}