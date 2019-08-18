function solve(arr) {
    let rotate = arr.pop();
    for (let i = 0; i < rotate; i++) {
        let currentElement = arr.pop();
        arr.unshift(currentElement)
    }
    console.log(arr.join(' '))
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15'])

