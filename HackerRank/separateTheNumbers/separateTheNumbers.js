// this code won't be able to solve testCase 4, 16, 18 because js can't handle long numbers
function separateNumbers(s) {
	if (s.length === 1) {
		console.log('NO');
		return;
	}

	const maxSplit = Math.floor(s.length / 2);
	let check = false;
	let digit;

	for (let i = 1; i <= maxSplit; i++) {
		digit = s.substr(0, i);
		let copy = digit;
		let add = parseInt(digit);

		while (copy.length < s.length) {
			copy += ++add;
		}
		if (copy === s) {
			check = true;
			break;
		}
	}
	if (check) {
		console.log('YES ' + digit);
	} else {
		console.log('NO');
	}
}

const s = '9991000';
console.log(separateNumbers(s));
