// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse doesn't move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

function mouseAndCat(x, y, z) {
	const distanceFromX = Math.abs(z - x);
	const distanceFromY = Math.abs(z - y);

	if (distanceFromX === distanceFromY) return 'Mouse C';
	if (distanceFromX < distanceFromY) return 'Cat A';
	if (distanceFromY < distanceFromX) return 'Cat B';
}

const catAPosition = 1,
	catBPosition = 2,
	mouseCPosition = 3;

console.log(mouseAndCat(catAPosition, catBPosition, mouseCPosition));
