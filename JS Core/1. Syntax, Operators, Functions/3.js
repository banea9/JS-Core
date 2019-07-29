function sameNumber(number) {
    let numToString = number.toString();
    let num = numToString[0].repeat(numToString.length)
    let sum = 0;
    for(let i =0; i < numToString.length; i++){
        sum += Number(numToString[i]);
    }
    if(Number(num) === number) {
        console.log('true')
        console.log(sum)
    }
    else {
        console.log('false')
        console.log(sum)
    }
}
sameNumber(2222222)
sameNumber(1234)