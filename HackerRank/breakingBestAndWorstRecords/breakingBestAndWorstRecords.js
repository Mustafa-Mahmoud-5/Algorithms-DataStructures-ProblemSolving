// calculate the times that the highest score is breaked(increased) and the times that the lowest scores is breaked(decreased)

class Count {
	constructor(highest, lowest) {
		this.highest = 0;
		this.lowest = 0;
	}
}

function breakingRecords(scores) {
	const count = new Count();

	let highestScore = -Infinity;
	let lowestScore = +Infinity;

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > highestScore) {
			highestScore = scores[i];
			if (i !== 0) count.highest++;
		}

		if (scores[i] < lowestScore) {
			lowestScore = scores[i];
			if (i !== 0) count.lowest++;
		}
	}
	return [ count.highest, count.lowest ];
}

const scores = [ 10, 5, 20, 20, 4, 5, 2, 25, 1 ];
console.log(breakingRecords(scores));
