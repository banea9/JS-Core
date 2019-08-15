function solve(input) {
    let matrix = [];
    for(let i = 0; i < input.length; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }
    let counter = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] == matrix[row][col + 1]) {
                counter++;
            }
        }
    }

    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] == matrix[row + 1][col]) {
                counter++;
            }
        }
    }

    console.log(counter);
}

solve(['2 3 4 7 0',
    '4 0 5 3 4',
    '2 3 5 4 2',
    '9 8 7 5 4']
)