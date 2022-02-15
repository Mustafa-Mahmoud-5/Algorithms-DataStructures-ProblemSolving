function singleNumber(nums) {
	const freq = {};

	for (let num of nums) {
		if (freq[num]) {
			freq[num]++;
		} else {
			freq[num] = 1;
		}
	}

	for (let num in freq) {
		console.log(num);
		if (freq[num] === 1) return +num;
	}
}

const arr = [ 4, 1, 2, 1, 2 ];
console.log(singleNumber(arr));
