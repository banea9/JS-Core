function populationInTowns(arr) {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' <-> ');
        if(!obj.hasOwnProperty(tokens[0])) {
            obj[tokens[0]] = Number(tokens[1]);
        }
        else {
            obj[tokens[0]] += Number(tokens[1]);
        }
    }
    for(let [key, value] of Object.entries(obj)) {
        console.log(`${key} : ${value}`)
    }
}