function solve(arr) {
    let resultArr = []
    let number = 0;
    for (let i = 0; i < arr.length; i++) {
        number++
        if (arr[i] === 'add') {
            resultArr.push(number);
        }
        else {
            resultArr.pop()
        }
    }
    if (resultArr.length === 0) {
        console.log('Empty');
    }
    else {
        console.log(resultArr.join('\n'))
    }
}
solve(['add', 
'add', 
'add', 
'add']
)