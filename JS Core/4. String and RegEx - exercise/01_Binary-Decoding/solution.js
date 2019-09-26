function solve() {
	let input = document.getElementById('input').value;
	let sum = input.split('')
		.map(Number)
		.reduce((a, b) => a + b)

	while (sum.toString().length !== 1) {
		sum = sum.toString().split('').map(Number).reduce((a, b) => a + b)
	}

	input = input.substring(sum, input.length - sum);
	let binaryCodes = input.match(/.{1,8}/g);
	let asciiCodes = [];
	for(let code of binaryCodes) {
		let digit = parseInt(code, 2);
		if((digit > 64 && digit < 91) || (digit > 96 && digit < 123) || (digit === 32)){
			asciiCodes.push(String.fromCharCode(digit))
		}
	}

	document.getElementById('resultOutput').textContent = `${asciiCodes.join('')}`

}