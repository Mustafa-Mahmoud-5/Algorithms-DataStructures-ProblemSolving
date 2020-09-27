function frequencyCounter(s) {
	// helper func
	const frequency = {};

	for (let char of s) {
		frequency[char] = frequency[char] + 1 || 1;
	}

	return frequency;
}

function isAnagram(obj1, obj2) {
	// helper func

	let obj1Length = 0;

	for (let key in obj1) {
		obj1Length++;

		if (!obj2.hasOwnProperty(key)) return false;

		if (obj1[key] !== obj2[key]) return false;
	}

	let obj2Length = 0;
	for (let key in obj2) {
		obj2Length++;
	}

	if (obj1Length !== obj2Length) return false;

	return true;
}

function getAllSubstrings(s) {
	// helper func

	const substrings = [];

	let i = 0;
	let j = i + 1;

	while (i < s.length) {
		const substring = s.slice(i, j);
		substrings.push(substring);

		j++;

		if (j > s.length) {
			i++;
			j = i + 1;
		}
	}

	return substrings;
}

function sherlockAndAnagrams(s) {
	if (s.length > 100 || s.length < 2) return;

	const substrings = getAllSubstrings(s);

	let counter = 0;
	for (let i = 0; i < substrings.length; i++) {
		const frequencyA = frequencyCounter(substrings[i]);
		for (let j = i + 1; j < substrings.length; j++) {
			// this if check for performance optimization
			if (substrings[i].length === substrings[j].length) {
				const frequencyB = frequencyCounter(substrings[j]);

				const anagram = isAnagram(frequencyA, frequencyB);

				if (anagram) counter++;
			}
		}
	}

	return counter;
}

const string = 'ifailuhkqqhucpoltgtyovarjsnrbfpvmupwjjjfiwwhrlkpekxxnebfrwibylcvkfealgonjkzwlyfhhkefuvgndgdnbelgruel';

console.log(sherlockAndAnagrams(string));
