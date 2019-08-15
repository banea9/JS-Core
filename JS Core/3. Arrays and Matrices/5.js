function solve(numOfElements, sumOfKElements) {
    let arr = [1];
    let sum = 0;
    for (let i = 1; i < numOfElements; i++) {
        if(i < sumOfKElements) {
            arr.forEach(x => sum += x);
            arr.push(sum);
            sum = 0;
        }
        else {
            for(let j = i - sumOfKElements; j < i; j++) {
                sum += arr[j];
                if(j === i - 1) {
                    arr.push(sum);
                    sum = 0;
                }
            }
        }
    }
    console.log(arr.join(' '))
}
solve(8, 2)