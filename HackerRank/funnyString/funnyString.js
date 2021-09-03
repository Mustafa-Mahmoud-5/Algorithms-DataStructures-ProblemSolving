function funnyString(s) {
	const sReverse = s.split('').reverse().join('');

	const sAscii = [];
	for (let i = 0; i < s.length; i++) {
		sAscii.push(s.charCodeAt(i));
	}

	const sReverseAscii = [];
	for (let i = 0; i < sReverse.length; i++) {
		sReverseAscii.push(sReverse.charCodeAt(i));
	}

	let same = true;

	for (let j = 0; j < sAscii.length - 1; j++) {
		let sAsciiDiff = Math.abs(sAscii[j] - sAscii[j + 1]);

		let sReverseAsciiDiff = Math.abs(sReverseAscii[j] - sReverseAscii[j + 1]);

		if (sAsciiDiff !== sReverseAsciiDiff) {
			same = false;
			break;
		}
	}

	return same === true ? 'Funny' : 'Not Funny';
}
const string = 'acxz';

console.log(funnyString(string));
