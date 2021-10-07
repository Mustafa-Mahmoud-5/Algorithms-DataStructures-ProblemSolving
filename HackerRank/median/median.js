function median(arr) {
	arr.sort((a, b) => a - b);
	console.log(arr);
	const index = Math.floor(arr.length / 2);

	return arr[index];
}

const numbers = [ 101, 50, 40, 231, 500, 404, 632 ];

console.log(median(numbers));
