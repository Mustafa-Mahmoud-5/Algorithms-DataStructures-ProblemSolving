function balancedSums(arr) {
	// THE IDEA IS TO GET SUM, KEEP ADDING ELEMENTS YOU MOVE TO INTO LEFT VAR, REMOVE THE LEFT FROM SUM TO GET THE RIGHT, AND CHECK THE FORMULA OF TWO SIDES EQUALITY: left - currentEl(the leftside - the middle element) === sum - left(RIGHT)
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	let left = 0;
	let right = 0;
	for (let i = 0; i < arr.length; i++) {
		left += arr[i];
		right = sum - left;
		if (left - arr[i] === right) return 'YES';
	}

	return 'NO';
	console.log(sum);
}

const arr = [ 3, 0, 0, 0 ];

console.log(balancedSums(arr));

// This code is log(n^2) and fails testcases 3 and 4 as a timeline failure
/*
function balancedSums(arr) {
	let len = arr.length;
	for (let i = 0; i < len; i++) {
		let left = 0;
		for (let j = 0; j < i; j++) {
			left += arr[j];
		}
		let right = 0;
		for (let k = i + 1; k < len; k++) {
			right += arr[k];
		}
		console.log(i, left, right);
		if (left === right) return 'YES';
	}
	return 'NO';
}
*/
