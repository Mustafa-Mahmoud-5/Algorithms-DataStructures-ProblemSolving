// You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

function betweenTwoSets(a, b) {
	let counter = 0;

	for (let i = 0; i <= 100; i++) {
		let passedLCM = true;

		for (let int of a) {
			if (!(i % int === 0)) passedLCM = false;
		}

		if (passedLCM) {
			let passedHCM = true;

			for (let int of b) {
				if (!(int % i === 0)) passedHCM = false;
			}

			if (passedHCM) counter++;
		}
	}

	return counter;
}

const a = [ 2, 4 ],
	b = [ 16, 32, 96 ];

console.log(betweenTwoSets(a, b));

const test = [ 'ab', 'ac' ];

const result = test.every(el => el.includes('a'));
console.log('result', result);
