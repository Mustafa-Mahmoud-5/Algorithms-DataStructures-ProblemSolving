function frequencyCounter(arr) {
	let frequency = {};
	for (let el of arr) {
		if (frequency[el]) {
			frequency[el]++;
		} else {
			frequency[el] = 1;
		}
	}
	return frequency;
}

function missingNumbers(arr, brr) {
	const missing = [];

	const elem1 = frequencyCounter(arr);
	const elem2 = frequencyCounter(brr);

	for (let el in elem2) {
		if (!elem1[el] || elem2[el] > elem1[el]) {
			missing.push(+el);
		}
	}

	missing.sort((a, b) => a - b);

	return missing;
}

const arr1 = [ 203, 204, 205, 206, 207, 208, 203, 204, 205, 206 ];

const arr2 = [ 203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204 ];

console.log(missingNumbers(arr1, arr2));
