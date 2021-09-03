function utopianTree(n) {
	let treeHeight = 1;

	for (let i = 1; i <= n; i++) {
		if (i % 2 !== 0) {
			// +1
			treeHeight *= 2;
		}

		if (i % 2 === 0) {
			// *2
			treeHeight += 1;
		}
	}

	return treeHeight;
}

const cycles = 5;

console.log(utopianTree(cycles));
