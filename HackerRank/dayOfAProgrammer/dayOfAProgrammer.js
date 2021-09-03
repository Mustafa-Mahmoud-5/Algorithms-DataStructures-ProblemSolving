// function discription image is attached in the same folder

function dayOfTheProgrammer(year) {
	// the day of the programmer will be on september

	if (typeof year !== 'number') year = Number(year);

	// months days till 8 (Febraury is missing);
	const monthsDays = [ 31, 31, 30, 31, 30, 31, 31 ];

	let daysSum = 0;

	for (const monthDay of monthsDays) {
		daysSum += monthDay;
	}

	// determine first what type of calender we follow

	let calenderType = 'julian';

	let febrauryDays;

	if (year >= 1918) calenderType = 'gregorian';

	if (
		(calenderType === 'julian' && year % 4 === 0) ||
		(calenderType === 'gregorian' && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))
	) {
		febrauryDays = 29;
	} else {
		febrauryDays = 28;
	}

	// the function description said that the changing to gregorian started in 1918 at febraury 14, which means that febrauryDays will only be detected febraury days - 13

	if (year === 1918) febrauryDays = febrauryDays - 13;

	daysSum += febrauryDays;

	const dayOfProgrammer = 256 - daysSum;

	return `${dayOfProgrammer}.09.${year}`;
}

console.log(dayOfTheProgrammer(1918));
// 26.09.1918
