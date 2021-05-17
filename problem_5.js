const smallestMultiple = maxDivisor => {
	let sMultiple = 0;
	let start = maxDivisor;
	let unsolved = true;

	while (unsolved) {
		for (let i = 1; i <= maxDivisor; ++i) {
			if (start % i !== 0) {
				break;
			} else {
				if (i === maxDivisor) {
					sMultiple = start;
					unsolved = false;
				}
			}
		}
		start++;
	}
	return sMultiple;
};

console.log(smallestMultiple(20));
