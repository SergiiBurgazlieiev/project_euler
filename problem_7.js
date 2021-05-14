const isPrime = num => {
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false;
	}
	return true;
};

const findPrime = num => {
    let primeNum;
	let counter = 1;
	let i = 2;
	while (counter <= num) {
		if (isPrime(i)) {
			counter++;
			primeNum = i;
		}
		i++;
	}
	return primeNum;
};

console.log(findPrime(6)); // 13
console.log(findPrime(10001)); // 104743
