// you will be given the total pages of a book(n) and the page we want to go to(p), detect how many papers will you flip taking in consedration the short path (starting from front or back)

function pageCount(n, p) {
	// detect if the front or back is near from the required page
	let fromWhereToStart = 'front';

	if (n - p < p - 0) fromWhereToStart = 'back';

	let pagesCounter = 0;

	// if front, we will flip page with every time we encounter a page of odd value
	if (fromWhereToStart === 'front') {
		for (let i = 1; i < p; i++) {
			if (i % 2 !== 0) {
				pagesCounter++;
			}
		}

		return pagesCounter;
	}

	// if from back, we will flip the page with every time we encounter a page with even value
	for (let i = n; i > p; i--) {
		if (i % 2 === 0) pagesCounter++;
	}

	return pagesCounter;
}

const bookPages = 6;
const desiredPage = 2;

console.log(pageCount(bookPages, desiredPage));
