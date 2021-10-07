function extraLongFactorials(n) {
	let factorial = BigInt(1);
	while (n >= 1) {
		factorial = factorial * BigInt(n);
		n--;
	}

	return String(factorial);
}
extraLongFactorials(25);
