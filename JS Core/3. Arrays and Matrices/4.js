function solve(arr) {
    let firstArr = []
    let lastArr = []
    for (let i = 1; i <= arr[0]; i++) {
        firstArr.push(arr[i])
    }
    for (let i = arr.length; i > arr.length - arr[0] - 1; i--) {
        lastArr.unshift(arr[i])
    }

    console.log(firstArr.join(' '))
    console.log(lastArr.join(' '))
}
solve([2, 7, 8, 9]
)