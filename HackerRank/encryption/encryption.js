/*
1-trim the string
2-take the length after trimming(i will now call it just string)
3-take square root of the string
4-rows variable is the floor and colums is the ceil
5-ensure rows X colums >= length of the string(because basically the grid is rows X colums available spot and it must be equal or less than the actual string that needs to be put in the grid)
*/

function encryption(s) {
	s.trim();

	const squareRoot = Math.sqrt(s.length);
	let rows = Math.floor(squareRoot);
	let columns = Math.ceil(squareRoot);

	if (rows * columns < s.length) rows++;
	console.log(rows, columns, s.length);

	const grid = [];

	let stringIndex = 0;
	for (let r = 1; r <= rows; r++) {
		let rowString = '';
		for (let c = 1; c <= columns; c++) {
			if (stringIndex === s.length) break;
			rowString += s[stringIndex];
			stringIndex++;
		}
		grid.push(rowString);
	}

	// The array is the grid, the string is a row, each represents a column
	// combine each first index of all strings in the grid to a new string
	const orderedGrid = [];

	for (let i = 0; i < grid.length; i++) {
		let row = grid[i];
		console.log(row);
		for (let j = 0; j < row.length; j++) {
			console.log(row[j]);
			let column = row[j];
			if (!orderedGrid[j]) orderedGrid[j] = '';
			orderedGrid[j] += row[j];
		}
	}

	const encodedString = orderedGrid.join(' ');

	return encodedString;
}

string = 'feedthedog';
encryption(string);
