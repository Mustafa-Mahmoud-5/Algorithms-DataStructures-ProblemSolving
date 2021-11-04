/*
 * k --> integer
 * s --> main string
 * t --> the string s need to be as
*/
function appendAndDelete(s, t, k) {
	if (s === t) {
		if (s.length * 2 <= k) return 'Yes';
		return 'No';
	}

	let p = 0;
	while (true) {
		if (s[p] !== t[p]) {
			break;
		}
		p++;
	}
	console.log('P', p);
	let ssh = 0;
	for (let i = p; i < s.length; i++) {
		ssh++;
	}

	let tsh = 0;
	for (let i = p; i < t.length; i++) {
		tsh++;
	}

	console.log(ssh, tsh);

	if (ssh === 0) {
		const ml = k - tsh;
		if (tsh % ml !== 0) return 'No';
	}

	if (tsh === 0) {
		const ml = k - ssh;
		if (ml % 2 !== 0) return 'No';
	}

	if (ssh + tsh <= k) return 'Yes';
	return 'No';
}

console.log(appendAndDelete('aaaaaaaaaa', 'aaaaa', 7));
