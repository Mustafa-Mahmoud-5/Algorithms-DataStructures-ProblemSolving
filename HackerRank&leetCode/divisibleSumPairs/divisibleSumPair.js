function divisibleSumPairs(arr, k) {
	if (arr.length < 2 || arr.length > 100) return null;

	let left = 0;
	let right = arr.length - 1;

	let counter = 0;

	while (left < arr.length) {
		let sum = arr[left] + arr[right];

		if (sum % k === 0 && left < right) counter++;

		right--;

		if (left === right || left === right + 1) {
			// the second check to prevent infinity loop at the last index
			left++;
			right = arr.length - 1;
		}
	}

	return counter;
}

const k = 3;
const ints = [ 1, 3, 2, 6, 1, 2 ];

console.log(divisibleSumPairs(ints, k));
