// there`s a function description picture attached to this folder.

function designerPdfViewer(h, word) {
	let tallestLetterHeight = -Infinity;

	for (let i = 0; i < word.length; i++) {
		// alphabet starts at 97 in the utf-codes, i.e letter 'a' starts at 97, so we subtract by 96 if we need an ordered indexes, but i will subtract by 97 because i need the index start from 0

		const letterPosition = word.charCodeAt(i) - 97;

		const letterHeight = h[letterPosition];

		if (letterHeight > tallestLetterHeight) tallestLetterHeight = letterHeight;
	}

	const rectangleArea = tallestLetterHeight * word.length;

	return rectangleArea;
}

const h = [ 1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
const word = 'abc';

console.log(designerPdfViewer(h, word));
