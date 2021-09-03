// Lily has a chocolate bar that she wants to share it with Ron for his birthday. Each of the squares has an integer on it. She decides to share a contiguous segment of the bar selected such that the length of the segment matches Ron's birth month and the sum of the integers on the squares is equal to his birth day. You must determine how many ways she can divide the chocolate.

// FUNCTION DESCRIPTION IS ATTACHED TO AN IMAGE IN THE SAME FOLDER

function birthDayChocolate(s, d, m) {
	let counter = 0;

	for (let i = 0; i < s.length; i++) {
		let segmantLength = 0; // match birthMonth
		let segmantSum = 0; // match birthDay
		for (let j = i; j < s.length; j++) {
			segmantLength++;
			segmantSum += s[j];

			if (segmantLength === m && segmantSum === d) {
				counter++;
				break;
			}
		}
	}

	return counter;
}

const chocolateSquares = [ 1, 2, 1, 3, 2 ]; //(s)
const birthday = 3; // (d)
const birthMonth = 2; // (m)

console.log(birthDayChocolate(chocolateSquares, birthday, birthMonth));
