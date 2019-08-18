function solve(matrix) {
    let equalSum = true;
    let firstSum = matrix[0].reduce((a,b) => a+b);
    for (let row = 1; row < matrix.length; row++) {
        let sum = 0;
        for (let col = 0; col < matrix.length; col++) {
            sum += matrix[row][col]
            if(col === matrix.length - 1) {
                if ( !(sum === firstSum) ) {
                    equalSum = false;
                    console.log(equalSum);
                    return;
                }
            }

        }
    }
    console.log(equalSum)
}
solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   
)