/*
n >> number of prisoners
m >> number of candy pieces
s >> starting jailer number
*/

function saveTheprisoner(n, m, s) {
	const lc = s - 1;

	const cp = m + lc;

	const ip = cp % n;

	if (ip === 0) return n;
	return ip;
}

const n = 3,
	m = 7,
	s = 3;

console.log(saveTheprisoner(n, m, s));

//this algoithm is all mathy, it will assume that we give m candies to the prisoners as if there were infinite number of prisoners, and then check the position we stopped at(the candies finished at) and then add the number of left chairs s-1 since we may start at the second or third chair (not always the first) and after that we get the result % number of chairs to give us the number of chair which is equivelant to that imaginary number of chair we get. but if that result was 0, then it means there was no remainder, which indicates that the number of chair was the last chair
