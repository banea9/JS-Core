function solve(arr) {
    let totalCache = 0;
    let cacheInserted = 0;
    let banknotes = new Map();
    for (let row of arr) {
        if (row.length > 2) {
            row.forEach(element => {
                cacheInserted += element;
                if (banknotes.has(element.toString())) {
                    let existingCount = banknotes.get(element.toString());
                    existingCount++;
                    banknotes.set(element.toString(), existingCount);
                }
                else {
                    banknotes.set(element.toString(), 1);
                }

            });
            totalCache += cacheInserted;
            console.log(`Service Report: ${cacheInserted}$ inserted. Current balance: ${totalCache}$.`)
            cacheInserted = 0;
        }

        else if (row.length === 2) {
            if (row[0] < row[1]) {
                console.log(`Not enough money in your account. Account balance: ${row[0]}$.`)
            }
            else if (row[1] > totalCache) {
                console.log('ATM machine is out of order!')
            }
            else {
                console.log(`You get ${row[1]}$. Account balance: ${row[0] - row[1]}$. Thank you!`)
                totalCache -= row[1];
                let sorted = [...banknotes.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
                for (let [key, value] of sorted) {
                    key = Number(key);
                    if(row[1] === 0) {
                        break;
                    }
                    while (value !== 0) {
                        if (row[1] >= key) {
                            row[1] -= key;
                            value--;
                            banknotes.set(banknotes.get(key.toString()), value);
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
        else if (row.length === 1) {
            if (banknotes.has(row[0].toString())) {
                console.log(`Service Report: Banknotes from ${row[0]}$: ${banknotes.get(row[0].toString())}.`)
            }
        }
    }
}
solve([[20, 5, 100, 20, 1],
[457, 25],
[1],
[10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
[20, 85],
[5000, 4500],
]
)