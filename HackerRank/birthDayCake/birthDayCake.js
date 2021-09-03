// given an array of cake candles, the tallest candles only can be blew out. check the numbers of largest candles

const birthDayCake = arr => {
	// the idea is to check the number of largest elements in the array, so i can use the frequencyCounter design pattern
	const frequencyCounter = {};

	for (let el of arr) {
		frequencyCounter[el] = frequencyCounter[el] + 1 || 1;
	}

	// loop over the frequencyCounter object, detect the largest number, get its value in another element

	let largestNumber = 0; // for deticting the largest number
	let largestNumberFrequency; // for geting largest number value

	for (let el in frequencyCounter) {
		if (el > largestNumber) {
			console.log('el', el);
			largestNumber = el;
			largestNumberFrequency = frequencyCounter[el];
		}
	}
	return largestNumberFrequency;

	// another method for frequency counting
	/*
	let max = 0;
	let counter = 0;

	for (let el of arr) {
		if (el > max) {
			max = el;
			counter = 1;
		} else if (el === max) {
			counter++;
		}
  }
  
  */
};

const array = [ 3, 2, 1, 3 ];

console.log(birthDayCake(array));
