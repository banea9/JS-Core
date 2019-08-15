function solve(arr) {
    arr.sort((a,b) => a-b);
    console.log(arr.splice(0,2).join(' '));
}
solve([3, 0, 10, 4, 7, 3])