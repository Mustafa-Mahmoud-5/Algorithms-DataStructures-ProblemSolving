function sherlockAndSquares(a, b) {
	let perfectSquare = 1;
	let psUnitValue = 1;

	//psUnitValue -> perfectSquare			 ex: 1 -> 1  2 -> 4  3 -> 9  4 -> 16

	let counter = 0;
	while (perfectSquare <= b) {
		if (perfectSquare >= a && perfectSquare <= b) counter++;
		psUnitValue++;
		perfectSquare = psUnitValue * psUnitValue;
	}

	return counter;
}

const start = 1,
	end = 25;
console.log(sherlockAndSquares(start, end));
