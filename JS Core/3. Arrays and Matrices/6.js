function solve(arr) {
    let filtered = arr.filter(function(value, index) {
        return index % 2 === 1;
    })
    let output = '';
    for(let i = filtered.length - 1; i >= 0; i--) {
        filtered[i] *= 2;
        output += `${filtered[i]} `
    }
    console.log(output)

}
solve([3, 0, 10, 4, 7, 3])