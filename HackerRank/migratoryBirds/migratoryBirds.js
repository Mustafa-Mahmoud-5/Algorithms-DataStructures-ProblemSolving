function migratoryBirds(arr) {
	const frequency = {};

	for (let birdType of arr) {
		frequency[birdType] = ++frequency[birdType] || 1;
	}

	let maximum = { id: null, value: -Infinity };

	for (let key in frequency) {
		if (frequency[key] > maximum.value) {
			maximum.value = frequency[key];
			maximum.id = key;
		}
	}

	console.log(maximum.id);
}

const sightings = [ 1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4 ];

console.log(migratoryBirds(sightings));
