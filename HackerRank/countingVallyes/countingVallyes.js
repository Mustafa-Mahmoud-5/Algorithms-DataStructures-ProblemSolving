function countingVallyes(s) {
	// start from the top
	let position = 'U';

	let degree = 0;

	let valleys = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'U') degree++;
		if (s[i] === 'D') degree--;

		if (degree < 0 && position === 'U') {
			valleys++;
			position = 'D';
		} else if (degree >= 0) {
			position = 'U';
		}
	}

	return valleys;
}

const stringDescription = 'DDUUDDUDUUUD';
console.log(countingVallyes(stringDescription));
