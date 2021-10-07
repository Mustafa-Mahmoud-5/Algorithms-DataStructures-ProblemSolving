function romanToInt(s) {
	const romanNumbers = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000
	};
	const edgeCases = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };

	let counter = 0;

	let i = 0;
	while (i < s.length) {
		let str = s[i] + s[i + 1];
		if (str in edgeCases) {
			counter += edgeCases[`${str}`];
			i = i + 2;
		} else {
			counter += romanNumbers[`${s[i]}`];
			i++;
		}
	}
	return counter;
}

const string = 'IV';
romanToInt(string);
