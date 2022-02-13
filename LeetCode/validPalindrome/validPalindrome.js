function isPalindrome(s) {
	console.log(s);
	s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
	console.log(s);
	let isValid = true;
	let left = 0;
	let right = s.length - 1;
	while (left < right) {
		if (s[left] !== s[right]) {
			isValid = false;
			break;
		}

		left++;
		right--;
	}

	return isValid;
}

console.log(isPalindrome('ab_a'));
