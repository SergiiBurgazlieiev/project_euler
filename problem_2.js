const evenFibNumbers = num => {
	let before = 1;
	let after = 2;
	let next = before + after;
	let arr = [2];
	while (next < num) {
		if (next % 2 === 0) {
			arr.push(next);
		}
		before = after;
		after = next;
		next = before + after;
	}
	return arr.reduce((a, b) => a + b);
};

console.log(evenFibNumbers(10)); // 10
console.log(evenFibNumbers(4000000)); // 4613732