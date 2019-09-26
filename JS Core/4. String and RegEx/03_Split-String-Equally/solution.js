function solve() {
    let text = document.getElementById('text').value;
    let number = Number(document.getElementById('number').value);

    function stringSpliter(text, number) {
        let output = [];
        for (let i = 0; i < text.length; i = i + number) {
            let substr = '';
            substr = text.substr(i, number);
            if (substr.length < number) {
                substr += text.substr(0, number - substr.length);
            }
            output.push(substr);
        }
        document.getElementById('result').textContent = output.join(' ');
    }

    stringSpliter(text, number)

}