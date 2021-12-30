function iceCreamParlor(m, arr) {
	let sorted = [ ...arr ].sort((a, b) => a - b);
	let p1 = 0;
	let p2 = arr.length - 1;
	let flavors = [];

	while (true) {
		let left = sorted[p1];
		let right = sorted[p2];
		let sum = left + right;

		if (sum === m) {
			flavors[0] = arr.indexOf(left) + 1;
			flavors[1] = arr.indexOf(right) + 1;

			if (flavors[0] === flavors[1]) {
				flavors[1] = arr.indexOf(right, flavors[0]) + 1;
			}
			break;
		}

		if (sum > m) {
			p2--;
		} else if (sum < m) {
			p1++;
		}
	}

	if (flavors[0] > flavors[1]) {
		return [ flavors[1], flavors[0] ];
	}
	return flavors;
}

let arr = [ 5, 75, 25 ];

let pool = 100;
console.log(iceCreamParlor(pool, arr));
