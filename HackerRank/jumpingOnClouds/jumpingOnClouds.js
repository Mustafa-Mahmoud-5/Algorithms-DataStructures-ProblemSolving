function jumpingOnTheClouds(c) {
	let jumps = 0;
	let i = 0;
	while (i < c.length) {
		if (c[i + 2] === 0) {
			jumps++;
			i += 2;
		} else if (c[i + 1] === 0) {
			jumps++;
			i += 1;
		} else {
			break;
		}
	}

	return jumps;
}

console.log(jumpingOnTheClouds([ 0, 0, 0, 0, 1, 0 ]));
