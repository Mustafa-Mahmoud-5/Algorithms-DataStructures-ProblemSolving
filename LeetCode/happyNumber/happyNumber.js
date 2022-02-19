function happyNumber(n) {
	let s = new Set();
	while (true) {
		n = n.toString();
		let sum = 0;
		for (let digit of n) {
			sum += digit ** 2;
		}
		console.log(sum);
		if (sum === 1) return true;
		if (s.has(sum)) return false;
		s.add(sum);
		n = sum;
	}
}
// another solution
function recursion(n, s = new Set()) {
	n = n.toString();
	let sum = 0;
	for (let digit of n) {
		sum += digit ** 2;
	}
	if (sum === 1) return true;
	if (s.has(sum)) return false;
	s.add(sum);
	return recursion(sum, s);
}
const number = 12;
console.log(recursion(number));
