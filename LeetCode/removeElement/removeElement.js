function removeElements(nums, val) {
	let i = 0;
	for (j = 0; j < nums.length; j++) {
		if (nums[j] != val) {
			nums[i] = nums[j];
			i++;
		}
	}
	return i;
}

const nums = [ 3, 2, 2, 3 ];

const val = 3;

console.log(removeElements(nums, val));

/*
i = 3[length]   j = 4 [done]
 3 2 2 5
 2 2 2 5
 2 2 2 5
 2 2 5 5

*/
