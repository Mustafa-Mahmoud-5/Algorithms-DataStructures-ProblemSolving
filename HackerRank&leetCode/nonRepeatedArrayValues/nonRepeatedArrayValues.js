const flat = array => {
	if (array.length === 0) return undefined;

	// push the first element of the array to be able to loop through the flattedArray for the first time
	let flattedArray = [ array[0] ];

	// looping through the array
	for (let i = 0; i < array.length; i++) {
		// a variable that will help me detecting if array[i] was found in the flattedArray
		let found = false;
		for (let j = 0; j < flattedArray.length; j++) {
			// loop through the whole flattedArray for each array[i], if array[i] was found, make found = true, break
			if (array[i] === flattedArray[j]) {
				found = true;
				break;
			}
		}

		// after the nested check in the flatted array, if found was false that mean array[i] is not in flattedArray, so we push it
		if (found === false) {
			flattedArray.push(array[i]);
		}
	}

	// return the new created array
	return flattedArray;
};

let array = [ 1, 2, 2, 4, 3, 5, 6, 7, 8, 1, 2 ];

console.log(flat(array));
