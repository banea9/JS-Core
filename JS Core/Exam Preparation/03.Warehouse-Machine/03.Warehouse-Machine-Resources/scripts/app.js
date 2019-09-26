function coffeeStorage() {
    let input = document.getElementsByTagName('textarea')[0].value;
    let arr = input.split('"').filter(el => el.length !== 1);
    let coffeeBrandStorageMap = new Map();
    for (let row of arr) {
        let [command, brandName, coffeeName, expirationDate, quantity] = row.split(', ');
        quantity = Number(quantity);
        if (command === "IN") {
            addCoffeeToStorage(brandName, coffeeName, expirationDate, quantity)
        } else if (command === "OUT") {
            removeCoffeeToStorage(brandName, coffeeName, expirationDate, quantity)
        } else if (command === "REPORT") {
            listReport(brandName, coffeeName, expirationDate, quantity)
        } else if (command === "INSPECTION") {
            listSortedReport(brandName, coffeeName, expirationDate, quantity)
        }
    }
    function addCoffeeToStorage(brandName, coffeeName, expirationDate, quantity) {
        let coffeeMap = new Map();
        let dateAndQuantity = [];
        let coffeeArr = [];
        if (coffeeBrandStorageMap.has(brandName)) {

            let existingCoffee = coffeeBrandStorageMap.get(brandName);
            for (let map of existingCoffee) {

                if (map.has(coffeeName)) {
                    let existingInfo = map.get(coffeeName);
                    let date = existingInfo[0];
                    let amount = existingInfo[1];

                    if (expirationDate > date) {
                        existingInfo.splice(existingInfo.indexOf(date), 1, expirationDate);
                        existingInfo.splice(existingInfo.indexOf(amount), 1, quantity);
                    } else if (expirationDate === date) {
                        existingInfo.splice(existingInfo.indexOf(amount), 1, amount + quantity);
                    }

                } else {
                    coffeeArr.push(existingCoffee[0]);
                    dateAndQuantity.push(expirationDate);
                    dateAndQuantity.push(quantity);
                    coffeeMap.set(coffeeName, dateAndQuantity);
                    coffeeArr.push(coffeeMap)
                    coffeeBrandStorageMap.set(brandName, coffeeArr);
                }

            }
        } else {
            dateAndQuantity.push(expirationDate);
            dateAndQuantity.push(quantity);
            coffeeMap.set(coffeeName, dateAndQuantity);
            coffeeArr.push(coffeeMap)
            coffeeBrandStorageMap.set(brandName, coffeeArr);
        }


    }
    function removeCoffeeToStorage(brandName, coffeeName, expirationDate, quantity) {
        let mainArr = [...coffeeBrandStorageMap.entries()];
        for (let array of mainArr) {
            if (brandName === array[0]) {
                for (let map of array[1]) {
                    if (map.has(coffeeName)) {
                        let existingData = map.get(coffeeName);
                        if (expirationDate < existingData[0] && existingData[1] >= quantity) {
                            existingData.splice(existingData.indexOf(existingData[1]), 1, existingData[1] - quantity);
                        }
                    }
                }
            }

        }
    }
    function listReport(brandName, coffeeName, expirationDate, quantity) {
        let reportParagraph = document.getElementsByTagName('p')[0];
        let mainArr = [...coffeeBrandStorageMap.entries()];
        for (let brand of mainArr) {
            let output = '';
            let p = document.createElement('p');
            output += `${brand[0]}: `

            for (let maps of brand[1]) {
                let innerArr = [...maps.entries()];
                output += `${innerArr[0][0]} - `
                for (let i = 0; i < innerArr[0][1].length; i++) {
                    if (i === 0) {
                        output += `${innerArr[0][1][0]} - `
                    }
                    else {
                        output += `${innerArr[0][1][1]}. `
                    }
                }
            }
            p.textContent = output;
            reportParagraph.appendChild(p)
        }
    }
    function listSortedReport(brandName, coffeeName, expirationDate, quantity) {
        let inspectionParagraph = document.getElementsByTagName('div')[1].children[1]
        let mainArr = [...coffeeBrandStorageMap.entries()];
        let sorted = mainArr.sort((a, b) => {
            return a[0].localeCompare(b[0])
        })
        console.log(sorted)
        let testingarr = []
        for (let i = 0; i < sorted[2][1].length; i++) {
            
        }
        /*
        for (let brand of mainArr) {
            let output = '';
            let p = document.createElement('p');
            output += `${brand[0]}: `
            
            for (let maps of brand[1]) {
                console.log(maps)
                let innerArr = [...maps.entries()];
                let innerSort = innerArr[1].sort
            }*/

    }
}
