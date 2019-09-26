function solve() {
    let input = document.getElementById('string').value;
    let namePattern = (input) => {
        let pattern = /( [A-Z][A-Za-z]*-[A-Z][A-Za-z]* )|( [A-Z][A-Za-z]*-[A-Z][A-Za-z]*\.-[A-Z][A-Za-z]* )/gi
        let match = input.match(pattern);
        return match[0].substring(1, match[0].length - 1).split('-').join(' ');
    }

    let airportPattern = (input) => {
        let pattern = / [A-Z]{3}\/[A-Z]{3} /gi
        let match = input.match(pattern);
        return match[0].substring(1, match[0].length - 1).split('/');
    }

    let flightNumberPattern = (input) => {
        let pattern = / [A-Z]{1,3}[0-9]{1,5} /gi
        let match = input.match(pattern);
        return match[0].substring(1, match[0].length - 1);
    }

    let comapanyPattern = (input) => {
        let pattern = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /gi
        let match = input.match(pattern);
        return match[0].substring(2, match[0].length - 1).split('*').join(' ');
    }

    document.getElementById('result').textContent = `Mr/Ms ${namePattern(input)}, your flight number ${flightNumberPattern(input)} is from ${airportPattern(input)[0]} to ${airportPattern(input)[1]}. Have a nice flight with ${comapanyPattern(input)}.`
    
}