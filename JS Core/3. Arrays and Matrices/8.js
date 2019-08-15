function solve(matrix) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] > biggestNumber) {
                biggestNumber = matrix[row][col];
            }
        }

    }
    console.log(biggestNumber)
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   
)