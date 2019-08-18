function solve(arrayOfStrings) {
    let numberMatrix = arrayOfStrings.map((row) => {
        return row.split(' ')
    })

    for (let i = 0; i < numberMatrix.length; i++) {
        numberMatrix[i] = numberMatrix[i].map((el) => Number(el));
    }

    let sumFirstDiag = 0;
    let sumSecondDiag = 0;
    for (let i = 0; i < numberMatrix.length; i++) {
        sumFirstDiag += numberMatrix[i][i];
        sumSecondDiag += numberMatrix[i][numberMatrix.length - i - 1];
    }
    if (sumFirstDiag === sumSecondDiag) {
        for (let row = 0; row < numberMatrix.length; row++) {
            
            let firstDiagEl = numberMatrix[row][row];
            let secondDiagEl = numberMatrix[row][numberMatrix.length - row - 1];

            for (let col = 0; col < numberMatrix.length; col++) {

                if(row !== col && (row + col) !== numberMatrix.length - 1) {
                    numberMatrix[row][col] = sumSecondDiag;
                }
            }
        }
        numberMatrix.forEach(el => console.log(el.join(' ')))
    }
    else {
        numberMatrix.forEach((el) => console.log(el.join(' ')))
    }
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']

)