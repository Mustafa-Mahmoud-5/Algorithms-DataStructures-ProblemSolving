function theLoveLetterMystery(s) {
	let left = 0;
	let right = s.length - 1;

	let counter = 0;

	while (left !== right && right !== left - 1) {
		const letterDifference = Math.abs(s.charCodeAt(right) - s.charCodeAt(left));

		counter += letterDifference;

		left++;
		right--;
	}

	return counter;
}

const string = 'abcd';

console.log(theLoveLetterMystery(string));
