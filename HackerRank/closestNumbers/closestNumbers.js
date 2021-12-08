function closestNumbers(arr) {
	let pairs = [];
	arr.sort((a, b) => a - b);
	let smallest = Infinity;
	for (let i = 0; i < arr.length; i++) {
		let absDiff = Math.abs(arr[i] - arr[i + 1]);
		if (absDiff < smallest) {
			smallest = absDiff;
			pairs = [];
			pairs.push(arr[i]);
			pairs.push(arr[i + 1]);
		} else if (absDiff === smallest) {
			pairs.push(arr[i]);
			pairs.push(arr[i + 1]);
		}
	}

	return pairs;
}

const arr = [ 5, 4, 3, 2, 1 ];

console.log(closestNumbers(arr));
