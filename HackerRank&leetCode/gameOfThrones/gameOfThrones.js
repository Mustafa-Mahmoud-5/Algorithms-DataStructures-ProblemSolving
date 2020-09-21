function gameOfThrones(s) {
	const strFrequency = {};

	for (let char of s) {
		strFrequency[char] = strFrequency[char] + 1 || 1;
	}

	console.log('gameOfThrones -> strFrequency', strFrequency);

	if (s.length % 2 !== 0) {
		let total = 0;
		let odd = 0;
		let even = 0;

		for (let key in strFrequency) {
			total++;

			if (strFrequency[key] % 2 === 0) even++;

			if (strFrequency[key] % 2 !== 0) odd++;
		}

		if (odd === 1 && total - 1 === even) return 'YES';
	}

	if (s.length % 2 === 0) {
		let total = 0;
		let odd = 0;
		let even = 0;

		for (let key in strFrequency) {
			total++;

			if (strFrequency[key] % 2 === 0) even++;

			if (strFrequency[key] % 2 !== 0) odd++;
		}

		if (odd === 0 && total === even) return 'YES';
	}

	return 'NO';
}

const string = 'cdcdcdcdeeeef';

console.log(gameOfThrones(string));
