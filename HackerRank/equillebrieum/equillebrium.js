// this function receives an array, its job is to deterimine the position(index) at which the two sides sum will be equal

// ex: [2,5,3,6,10] > will returns 3(the index where two sides are equal)

function equillebrium(arr) {
	if (arr.length < 3) return null;

	let right = 0;

	// the right will be the sum of all arr elements starting from the second element(because i will start the second loop from the second element as well)
	for (let i = 1; i < arr.length; i++) {
		right += arr[i];
	}

	let left = arr[0];

	for (let i = 1; i < arr.length; i++) {
		// for every time we go forward, decrease the right by the value of the current value
		right -= arr[i];

		if (right === left) return i;

		// before every time we go forward, increase the left by the value of the current i
		left += arr[i];
	}

	return null;

	// you could have easier started looping from 0, and increased left/decreased right at the beginning of each loop, but this my algorithm more logical to think of
}

const arr = [ 1, 2, 8, 3, 5, 6 ];

console.log(equillebrium(arr));
