function solve(input) {
    let main = 0;
    let secondary = 0;

    for (let row = 0; row < input.length; row++) {
        main += input[row][row];
        secondary += input[row][input[row].length - row - 1];
    }

    console.log(`${main} ${secondary}`);
}
solve([[20, 40],
[10, 60]]
)