\\
/*
function townsToJson(arr) {
    let properties = arr.shift().split(' ')
    properties.forEach(element => {
        if (element.length === 1) {
            properties.splice(properties.indexOf(element), 1);
        }
    });
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ')
        tokens.forEach(element => {
            if (element.length === 1) {
                tokens.splice(tokens.indexOf(element), 1);
            }
        });
        let obj = {};
        obj[properties[0]] = tokens[0]
        obj[properties[1]] = Number(tokens[1])
        obj[properties[2]] = Number(tokens[2])
        result.push(obj)
    }
    let resultJSON = JSON.stringify(result);
    console.log(resultJSON)
}

townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
	

	*/
	
	
function townsToJSON(input) {
    let towns = [];
    let regex = /\s*\|\s*/;

    for(let line of input.splice(1)) {
        let tokens = line.split(regex);
        let townObj = { Town: tokens[1], Latitude: Number(tokens[2]), Longitude: Number(tokens[3])};
        towns.push(townObj);
    }

    console.log(JSON.stringify(towns));
}