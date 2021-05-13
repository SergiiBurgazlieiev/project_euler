const multiplyByThreeFive = num => {
	let sum = 0;
	for (let i = 3; i < num; ++i) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
};
console.log(multiplyByThreeFive(10)); // 23
console.log(multiplyByThreeFive(1000)); // 233168
