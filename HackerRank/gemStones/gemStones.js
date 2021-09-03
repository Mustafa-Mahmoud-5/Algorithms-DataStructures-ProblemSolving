function excludeChar(string, removedElementIndex) {
	return string.substring(0, removedElementIndex) + string.substring(removedElementIndex + 1);
}

function gemStones(arr) {
	const firstString = arr[0];

	let counter = 0;

	for (let i = 0; i < firstString.length; i++) {
		console.log(firstString[i]);

		let letterCounter = 0;

		for (let j = 1; j < arr.length; j++) {
			let currentString = arr[j];
			console.log('gemStones -> currentString', currentString);

			if (currentString.includes(firstString[i])) {
				letterCounter++;

				currentString = excludeChar(currentString, currentString.indexOf(firstString[i]));

				arr[j] = currentString;
			}
		}

		if (letterCounter === arr.length - 1) counter++;
	}

	return counter;
}
const gems = [ 'abcadde', 'baccad', 'eeabag', 'ab' ];

console.log(gemStones(gems));
