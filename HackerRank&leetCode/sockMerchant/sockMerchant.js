// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, arr) {
	if (n > 100 || n < 1) return null;

	const frequency = {};
	let counter = 0;
	for (let sock of arr) {
		if (frequency[sock]) {
			frequency[sock] = frequency[sock] + 1;

			if (frequency[sock] % 2 === 0) counter++;
		} else {
			frequency[sock] = 1;
		}
	}

	return counter;
}

const socksColors = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ];
const n = socksColors.length;
console.log(sockMerchant(n, socksColors));
