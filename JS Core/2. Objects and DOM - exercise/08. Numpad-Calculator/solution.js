function solve() {
    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let keys = document.querySelectorAll('.keys button');
    let keysArr = Array.from(keys)
    keysArr.map((key) => key.addEventListener('click', function () {
        if (this.value === '=') {
            let symbols = expressionOutput.textContent.split(' ');
            symbols = symbols.filter(x => x.length > 0);
            
            if (symbols[symbols.length - 1].charCodeAt(0) < 48 || symbols[symbols.length - 1].charCodeAt(0) > 57 ) {
                resultOutput.textContent = NaN;
            }
            else {
                let sum = Number(symbols[0]);
                for (let i = 1; i < symbols.length - 1; i = i + 2) {
                    switch (symbols[i]) {
                        case '+':
                            sum += Number(symbols[i + 1]);
                            break;
                        case '-':
                            sum -= Number(symbols[i + 1]);
                            break;
                        case '/':
                            sum /= Number(symbols[i + 1]);
                            break;
                        case '*':
                            sum *= Number(symbols[i + 1]);
                            break;
                    }
                }
                resultOutput.textContent = sum.toFixed(2);
            }
            keysArr.map((key) => key.disabled = true)
        }
        else if ((this.value.charCodeAt(0) < 48 || this.value.charCodeAt(0) > 57) && this.value !== '.') {
            expressionOutput.textContent += ` ${this.value} `;
        }
        else {
            expressionOutput.textContent += this.value;
        }

    }))
    let clearBtn = document.getElementsByClassName('clear')[0];
    clearBtn.addEventListener('click', function () {
        keysArr.map((key) => key.disabled = false)
        resultOutput.textContent = '';
        expressionOutput.textContent = '';

    })
}
