function repeatedString(s, n) {
	let as = 0;
	let counter = 0;
	const sl = s.length;
	for (let i = 0; i < sl; i++) {
		if (s[i] === 'a') as++;
	}
	const loops = Math.floor(n / sl);
	const remainder = n % sl;
	counter = loops * as;
	for (let i = 0; i < remainder; i++) {
		if (s[i] === 'a') {
			counter++;
		}
	}

	return counter;
}

console.log(repeatedString('aba', 10));
