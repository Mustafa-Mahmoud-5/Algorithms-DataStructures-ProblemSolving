function getMoneySpent(keyboards, drives, b) {
	// let kPointer = 0;
	// let dPointer = 0;

	// while (kPointer < keyboards.length) {
	// 	let totalSum = keyboards[kPointer] + drives[dPointer];
	// 	console.log(kPointer, dPointer);

	// 	console.log(keyboards[kPointer], drives[dPointer]);

	// 	if (totalSum > mostPrice && totalSum <= b) mostPrice = totalSum;

	// 	dPointer++;

	// 	if (dPointer === drives.length) {
	// 		dPointer = 0;
	// 		kPointer++;
	// 	}
	// }

	let mostPrice = -Infinity;
	for (let i = 0; i < keyboards.length; i++) {
		for (let j = 0; j < drives.length; j++) {
			const totalSum = keyboards[i] + drives[j];
			if (totalSum > mostPrice && totalSum <= b) mostPrice = totalSum;
		}
	}

	return mostPrice === -Infinity ? -1 : mostPrice;
}

const keyboards = [ 4, 7 ];
const drives = [ 1, 7, 9, 4, 15 ];
const budget = 20;

console.log(getMoneySpent(keyboards, drives, budget));
