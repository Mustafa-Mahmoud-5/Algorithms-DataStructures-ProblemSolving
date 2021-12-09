function makingAnagrams(s1, s2) {
	// make a matchCounter(mc) variable, loop over s1, nest loop over s2
	// check of each character is found in the other string
	// if found, remove it from s2 and mc++

	let matches = 0;

	for (let i = 0; i < s1.length; i++) {
		for (let j = 0; j < s2.length; j++) {
			if (s1[i] === s2[j]) {
				matches++;
				s2 = s2.substring(0, j) + s2.substring(j + 1);
				break;
			}
		}
	}

	const s1Extras = s1.length - matches;

	return s1Extras + s2.length;
}

const s1 = 'abc',
	s2 = 'amnop';

console.log(makingAnagrams(s1, s2));
