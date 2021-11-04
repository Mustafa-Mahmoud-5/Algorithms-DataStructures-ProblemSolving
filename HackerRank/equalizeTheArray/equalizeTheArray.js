function equalizeTheArray(arr) {
	let bigger = 0;
	for (let i = 0; i < arr.length; i++) {
		let repeated = 0;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				repeated++;
			}
		}
		if (repeated + 1 > bigger) {
			bigger = repeated + 1;
		}
	}

	return arr.length - bigger;
}

console.log(equalizeTheArray([ 3, 3, 2, 2, 2, 1, 3 ]));
