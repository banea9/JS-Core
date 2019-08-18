function solve(arr) {
    let newArr = []
    newArr.push(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] >= newArr[newArr.length - 1]) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join('\n'));
}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]    
    )