function candies(arr) {
	const c = [];

	for (let i = 0; i < arr.length; i++) {
		let counter = 1;
		let p = i + 1;
		if (arr[i] > arr[p]) {
			counter++;
			while (arr[p] > arr[p + 1]) {
				counter++;
				p++;
			}
		}
		c[i] = counter;
		if (arr[i] > arr[i - 1] && c[i] <= c[i - 1]) {
			c[i] = c[i - 1] + 1;
		}
	}

	console.log(c);
	let sum = 0;
	for (let i = 0; i < c.length; i++) {
		sum += c[i];
	}
	return sum;
}

const cs = [ 1, 2, 2 ];

const test = [
	100000,
	100000,
	99999,
	99998,
	99997,
	99996,
	99995,
	99994,
	99993,
	99992,
	99991,
	99990,
	99989,
	99988,
	99987,
	99986,
	99985,
	99984,
	99983,
	99982
];
// 5000050000
console.log(candies(test));
