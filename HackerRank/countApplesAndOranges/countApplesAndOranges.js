// problem description is attached to an image in the same folder..

/*
Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/
const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
	/*
  s => houseStartingPoint: int
  t => houseEndingPoint: int
  a => appleTreeLocationPoint: int
  b => orangeTreeLocationPoint: int
  apples => applesDroppingPoints: int
  oranges => orangesDroppingPoints: []
  the idea is to count how many apples and oranges dropped on the house
  */

	const applesDroppingPoints = [];
	for (let apple of apples) {
		const appleDroppingPoint = a + apple; //apple tree location + distance from it
		applesDroppingPoints.push(appleDroppingPoint);
	}

	const orangesDroppingPoints = [];
	for (let orange of oranges) {
		const orangeDroppingPoint = b + orange;
		orangesDroppingPoints.push(orangeDroppingPoint);
	}

	// now we need to detect the apples and oranges dropped at range between s and t
	let droppedApples = 0;
	let droppedOranges = 0;

	for (let applePoint of applesDroppingPoints) {
		if (s <= applePoint && applePoint <= t) ++droppedApples;
	}

	for (let orangePoint of orangesDroppingPoints) {
		if (s <= orangePoint && orangePoint <= t) ++droppedOranges;
	}

	console.log(droppedApples);
	console.log(droppedOranges);
};

const houseStartingPoint = 7;
const houseEndingPoint = 11;
const appleTreeLocation = 5;
const orangeTreeLocation = 15;
const applesDroppedAt = [ -2, 2, 1 ];
const orangesDropedAt = [ 5, -6 ];

console.log(
	countApplesAndOranges(
		houseStartingPoint,
		houseEndingPoint,
		appleTreeLocation,
		orangeTreeLocation,
		applesDroppedAt,
		orangesDropedAt
	)
);
