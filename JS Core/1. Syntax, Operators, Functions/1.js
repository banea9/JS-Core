function getPrice(fruit, weightInGrams, pricePerKilos) {
	let weight = weightInGrams / 1000;
	let money = weight * pricePerKilos;
	console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
getPrice('orange', 2500, 1.80)
getPrice('apple', 1563, 2.35)