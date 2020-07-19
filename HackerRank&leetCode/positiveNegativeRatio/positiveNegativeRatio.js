const postitveNegativeRatio = arr => {
	if (arr.length < 0) return 0;
	const sum = arr.length;
	let positive = 0;
	let negative = 0;
	let zero = 0;

	arr.forEach(el => {
		if (el > 0) positive++;
		if (el < 0) negative++;
		if (el === 0) zero++;
	});

	const positiveRatio = (positive / sum).toFixed(6);
	const negativeRatio = (negative / sum).toFixed(6);
	const zeroRatio = (zero / sum).toFixed(6);

	return { positiveRatio, negativeRatio, zeroRatio };
};

const arr = [ -4, 3, -9, 0, 4, 1 ];
console.log(postitveNegativeRatio(arr));
