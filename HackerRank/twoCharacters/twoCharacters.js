function alternate(s) {
	// how many letters are there
	// decide which pairs to leave
	// for each pair to leave, check if the formed string makes an alternating sequence
	// if so, then it passes the requirments, save its length and repeat till we find other with higher length
	// return the higher length we find, if not return 0

	let letters = [];

	for (let letter of s) {
		if (letters.indexOf(letter) === -1) {
			letters.push(letter);
		}
	}

	let longest = 0;

	for (let i = 0; i < letters.length - 1; i++) {
		for (let j = i + 1; j < letters.length; j++) {
			console.log(letters[i], letters[j]);

			// forming a new str of only the current pair matching the sequence of the original string
			let newStr = '';
			for (let k = 0; k < s.length; k++) {
				if (s[k] === letters[i] || s[k] === letters[j]) newStr += s[k];
				if (newStr[newStr.length - 1] === newStr[newStr.length - 2] && newStr.length) {
					newStr = '';
					break;
				}
			}

			console.log(newStr);

			if (newStr.length > longest) longest = newStr.length;
		}
	}

	return longest;
	console.log(letters);
}

const str = 'beabeefeab';

console.log(alternate(str));
