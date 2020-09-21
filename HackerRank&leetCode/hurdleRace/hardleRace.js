// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. There is a magic potion they can take that will increase their maximum jump height by  unit for each dose. How many doses of the potion must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return .

function hurdleRace(k, height) {
	let maximum = -Infinity;

	for (const h of height) {
		if (h > maximum) maximum = h;
	}

	if (k >= maximum) return 0;

	const doses = maximum - k;

	return doses;
}

const height = [ 2, 5, 4, 5, 2 ];
const k = 7;

console.log(hurdleRace(k, height));
