// complete a function that takes a password that should iclude at least one lowerCase character, upperCase character, digit, special character and the pass should at least be characters, the question is from HackrRank strings section

function strongPassword(n, password) {
	const specialCharacters = '!@#$%^&*()-+';
	const numbers = '0123456789';
	const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
	const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

	let charactersLeft = 4;

	let upper = false;
	let lower = false;
	let digit = false;
	let specialCharacter = false;
	const test = specialCharacters.includes('0');

	for (const char of password) {
		if (specialCharacters.includes(char) && !specialCharacter) {
			console.log('sc');
			charactersLeft--;
			specialCharacter = true;
		}

		if (numbers.includes(char) && !digit) {
			digit = true;
			charactersLeft--;
		}

		if (smallLetters.includes(char) && !lower) {
			lower = true;
			charactersLeft--;
		}

		if (capitalLetters.includes(char) && !upper) {
			upper = true;
			charactersLeft--;
		}

		if (numbers.includes(char) && !digit) {
			digit = true;
			charactersLeft--;
		}
	}
	return Math.max(6 - n, charactersLeft); // if the password require lets say 3 characters left, but the lenght of the pass is 4, so its 2 left, we will sure go for 3 characters not 2. that`s why we return like this
}

const password = '4700';

console.log(strongPassword(password.length, password));
