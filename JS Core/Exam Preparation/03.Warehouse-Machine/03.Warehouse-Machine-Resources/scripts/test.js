let input = document.getElementsByTagName('textarea')[0].value;
let arr = input.split('\n');
let newArr = arr.map((element) => element = element + ".0")
let coffeeBrandStorageMap = new Map();
let output = document.getElementsByTagName('textarea')[1].value;
let compareArr = output.split("\n");
let result = [];
for (let i = 0; i < newArr.length; i++) {
    let counter = 0;
    for(let j = 0; j < compareArr.length; j++) {
        if((newArr[i]) === compareArr[j]) {
            counter++;
        }
    }
    if (counter === 0) {
        result.push(newArr[i]);
    }
}
console.log(result.join('\n'));