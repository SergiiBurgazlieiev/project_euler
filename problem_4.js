const isPalindrome = num =>
	num.toString() === num.toString().split('').reverse().join('');

const largestPalindromeProduct = num => {
	let products = [];
	let product = 0;

	let start = 100;
	while (start !== num) {
		for (let i = 100; i <= num; ++i) {
			product = start * i;
			if (isPalindrome(product)) {
				products.push(product);
			}
		}
		start++;
	}
	return products.sort((a, b) => b - a)[0];
};

console.log(largestPalindromeProduct(999)); // 906609
