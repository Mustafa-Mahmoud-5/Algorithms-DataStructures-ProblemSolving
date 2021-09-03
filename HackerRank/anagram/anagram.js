// there`s an image for the function description attached to this folder

// the idea of my solution, instead of just comparing if a character at part a is not found in the part b which is not perfect for all test cases, my goal is to check if a char in group a is located in group b, if found then remove it from group b.. why ? because at the end we need a group of characters that is not existed in group a, that`s how can we find the amount of character we need to replace

function anagram(s) {
	if (s.length % 2 !== 0) return -1;
	const middle = Math.round(s.length / 2);

	for (let i = 0; i < middle; i++) {
		for (let j = middle; j < s.length; j++) {
			if (s[i] === s[j]) {
				s = s.substring(0, j) + '' + s.substring(j + 1);

				break;
			}
		}
	}

	let counter = 0;
	for (let i = middle; i < s.length; i++) {
		counter++;
	}

	return counter;
}

const string = 'fdhlvosfpafhalll';
console.log(anagram(string));
