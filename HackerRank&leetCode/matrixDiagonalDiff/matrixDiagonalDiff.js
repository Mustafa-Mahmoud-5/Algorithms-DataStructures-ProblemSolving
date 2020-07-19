// make a function that takes a matrix and calculate the diagonalDifference of it

// the diagonal difference rule is  |right diagonal - left diagonal|

// we calculate the diagonal by adding the values of the diagonal
// 1 2 3
// 4 5 6
// 9 8 9
// let`s say the right diagonal = 1+5+9, the left is 3+5+9

const matrixDiagonalDiff = arr => {
	// since that the matrix will always be a square matrix, then we can detect the array length and the nested array length by only the array length;
	const arrLength = arr.length;

	let primaryDiagonal = 0;
	let secondaryDiagonal = 0;
	let diagonalDifference = 0;

	for (let i = 0; i < arr.length; i++) {
		primaryDiagonal += arr[i][i];
	}

	let secondaryCol = arrLength - 1;
	for (let i = 0; i < arr.length; i++) {
		secondaryDiagonal += arr[i][secondaryCol];
		secondaryCol--;
	}

	diagonalDifference = Math.abs(primaryDiagonal - secondaryDiagonal);
	return diagonalDifference;
};

const matrix = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
console.log(matrixDiagonalDiff(matrix));
