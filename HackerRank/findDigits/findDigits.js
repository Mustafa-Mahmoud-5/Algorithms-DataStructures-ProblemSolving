function findDigits(n) {
	const ni = n.toString();
	let c = 0;
	for (let i = 0; i < ni.length; i++) {
		if (n % Number(ni[i]) === 0) c++;
	}
	return c;
}

console.log(findDigits(124));
