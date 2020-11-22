function add (a, b) {
return a + b;	
}

function subtract (a, b) {
return a - b;	
}

function sum (array) {
	let total = 0;
	if (array.length === 0) {
		return 0;
	}
	array.forEach((num) => total += num);
	return total;
}

function multiply (...args) {
	let array = args[0];
	let total = 1
array.forEach((num) => total *= num);
return total;
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	let fac = 1;
	for (let i = 1; i <= a; i++) {
		fac *= i;
} 
	return fac;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}