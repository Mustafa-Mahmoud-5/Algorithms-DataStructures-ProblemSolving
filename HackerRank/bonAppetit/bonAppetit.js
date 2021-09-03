// FUNCTION DESCRIPTION ATTACHED TO AN IMAGE IN THE SAME FOLDER

const bonAppetit = (bill, k, b) => {
	let total = 0;

	for (let cost of bill) {
		total += cost;
	}

	const annaCharge = (total - bill[k]) / 2;

	if (annaCharge !== b) {
		const extraChargeOnAnna = b - annaCharge;

		return extraChargeOnAnna;
	} else {
		return 'Bon Appetit';
	}
};

const bill = [ 3, 10, 2, 9 ]; // costs of meal items
const k = 1; // the item that anna won`t meat
const b = 12; // the price that brain asked anna to pay

console.log(bonAppetit(bill, k, b));
