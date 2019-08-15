function solve() {

    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    let hexdecimalOption = document.createElement('option');
    hexdecimalOption.value = 'hexdecimal';
    hexdecimalOption.textContent = 'Hexdecimal';
    document.getElementById('selectMenuTo').appendChild(binaryOption);
    document.getElementById('selectMenuTo').appendChild(hexdecimalOption);
    let convertButton = document.getElementsByTagName('button')[0];
    convertButton.addEventListener('click', function () {
        let number = document.getElementById("input").value;
        if (number && document.getElementById('selectMenuTo').value === 'binary') {
            let result = Number(number).toString(2);
            document.getElementById('result').value = result;
        }
        else if (number && document.getElementById('selectMenuTo').value === 'hexdecimal') {
            let result = Number(number).toString(16).toUpperCase();
            document.getElementById('result').value = result;
        }
        
    })
}