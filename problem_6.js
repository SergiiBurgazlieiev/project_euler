const sumSquareDifference = num => {
	const arr = Array.from({ length: num }, (_, i) => i + 1);
	const sumOfEachquaredElement = arr.map(el => el * el).reduce((a, b) => a + b);
	const squaredSum = Math.pow(
		arr.reduce((a, b) => a + b),
		2
	);
	return squaredSum - sumOfEachquaredElement;
};

console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(100)); // 25164150
