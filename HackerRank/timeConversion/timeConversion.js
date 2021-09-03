// make a function that takes the time in 12h format >> 12:00:00AM, convert it to 24h format >> 00:00:00;
// how conversion in real life work ?
// if time is AM in 12h format, then we just remove AM in 24h format
// if time is PM in 12h format, then we add 12 hour in the 24h format
// ex: 07:05:45PM in 12h format is 19:05:45 in 12hr format (we added 12 hour and removed PM)
// ex: 07:05:45AM in 12h format is 07:05:45 in 12hr format (we removed AM)

const timeConversion = timeIn12Format => {
	// i don`t need to use any built in js function like split() or something.., actually i will create something simillar..

	// this obj will be filled with the time data
	let timeObject = { hr: '', min: '', sec: '', symbol: '' };

	let elements = [ 'hr', 'min', 'sec', 'symbol' ]; // this will detect where the time characters will go

	let changer = 0; // this will be increased every time we meet : or P to add the character to the right place

	for (let char of timeIn12Format) {
		if (char === ':' || char === 'P' || char === 'A') changer++;

		if (char !== ':') timeObject[elements[changer]] += char;
	}

	console.log('timeObject', timeObject);
	let timeIn24Format;

	// 12:m:s is special case
	// if hr is 12 and symbol is PM return  12:min:sec
	// if hr is 12 and symbol is AM return 00:min:sec
	if (timeObject.hr === '12') {
		if (timeObject.symbol === 'AM') {
			timeIn24Format = `00:${timeObject.min}:${timeObject.sec}`;
		}

		if (timeObject.symbol === 'PM') {
			timeIn24Format = `${timeObject.hr}:${timeObject.min}:${timeObject.sec}`;
		}
	} else {
		if (timeObject.symbol === 'PM') {
			/* add 12 to hr*/ timeIn24Format = `${+timeObject.hr + 12}:${timeObject.min}:${timeObject.sec}`;
		} else {
			// PM
			timeIn24Format = `${timeObject.hr}:${timeObject.min}:${timeObject.sec}`;
		}
	}

	return timeIn24Format;
};

const timeIn12Format = '06:40:03PM';

console.log(timeConversion(timeIn12Format));
