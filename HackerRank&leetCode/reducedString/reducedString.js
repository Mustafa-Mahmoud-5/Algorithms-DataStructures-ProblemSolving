// Function description is attached to an image inside the same folder
function removeChar(str, index) {
	const temp = str.split('');
	temp.splice(index, 1);
	return temp.join(' ');
}

function reducedString(s) {
	let pointer = 0;

	let copyStr = s;

	while (pointer !== copyStr.length - 1) {
		if (s[pointer] === s[pointer + 1] && s[pointer]) {
			s = s.slice(0, pointer) + s.slice(pointer + 1);

			s = s.slice(0, pointer) + s.slice(pointer + 1);

			pointer = 0;
		} else {
			pointer++;
		}
	}

	return s === '' ? 'Empty String' : s;
}

console.log(reducedString('aaabccddd'));
