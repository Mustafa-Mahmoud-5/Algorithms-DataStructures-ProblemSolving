function twoStrings(s1, s2) {
	const substrs = {};

	for (let i = 0; i < s1.length; i++) {
		substrs[s1[i]] = true;
	}

	console.log(substrs);

	for (let i = 0; i < s2.length; i++) {
		if (substrs[s2[i]]) return 'YES';
	}

	return 'NO';
}

let ans = twoStrings('bed', 'abc');
console.log(ans);
