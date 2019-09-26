function solve(string, text) {
    let string = document.getElementById('string').value;
    let text = document.getElementById('text').value;

    let messageRegexString = `${string}(.*)${string}`
    let messageRegex = new RegExp(messageRegexString, 'g');

    let messageMatch = messageRegex.exec(text)[1];


    let coordinateRegex = /(north|east).*?(\d{2})[^,]*?,[^,]*?(\d{6})/gmi;
    let match = coordinateRegex.exec(text);
    let east;
    let north;
    while (match !== null) {
        if (match[1].toLowerCase() === 'north') {
            north = `${match[2]}.${match[3]} N`;
        } else {
            east = `${match[2]}.${match[3]} E`;
        }
        match = coordinateRegex.exec(text);
    }
    console.log(north)
    console.log(east)
    console.log(messageMatch)
    

    let resultElement = document.getElementById('result');
    let firstPElement = document.createElement('p');
    firstPElement.textContent = north;
    let secondPElement = document.createElement('p');
    secondPElement.textContent = east;
    let thirdPElement = document.createElement('p');
    thirdPElement.textContent = messageMatch;
    resultElement.appendChild(firstPElement);
    resultElement.appendChild(secondPElement);
    resultElement.appendChild(thirdPElement);
    
}
