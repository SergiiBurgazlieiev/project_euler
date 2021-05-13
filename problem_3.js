const largestPrimeFactor = num => {
	let divider = 2;

	while (divider <= Math.floor(Math.sqrt(num))) {
		num % divider === 0 ? (num /= divider) : divider++;
	}
	return num;
};

console.log(largestPrimeFactor(13195)); // 29
console.log(largestPrimeFactor(600851475143)); // 6857
