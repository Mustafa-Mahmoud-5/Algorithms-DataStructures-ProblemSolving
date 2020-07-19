// we need a sorting algorithm

// we need a swap function to swap elements of the array
const swap = (arr, idx1, idx2) => {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};

const bubbleSort = arr => {
	for (let i = arr.length; i > 0; i--) {
		let swapped = true;

		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				swapped = false;
			}
		}
		if (swapped) break;
	}
	return arr;
};
const miniMaxSum = arr => {
	const sortedArr = bubbleSort(arr);
	console.log(sortedArr);
	let min = 0;
	let max = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		// we know that the arr is sorted, then the max value will be collected from adding all elements except the first and the min valu from adding all elements except the last one

		// adding to min
		min += arr[i];

		// adding to max
		max += arr[i + 1];
	}

	console.log(min, max);
};

const arr = [ 7, 69, 2, 221, 8974 ];
console.log(miniMaxSum(arr));
