function removeDuplicates(nums) {
	let i = 0;

	while (i < nums.length) {
		console.log(i, nums[i], nums.length);

		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}

	return nums.length;
}

const arr = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ];
console.log(removeDuplicates(arr));
