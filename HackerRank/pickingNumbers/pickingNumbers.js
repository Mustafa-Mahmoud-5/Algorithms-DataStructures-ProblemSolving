// # Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// ! The program algorithm is described below the code function !

function pickingNumbers(a) {
	a.sort();
	let largestSubArrCounter = 0;
	for (let i = 0; i < a.length; i++) {
		let parentEl = a[i];
		let subArrCounter = 1;
		for (let j = i + 1; j < a.length; j++) {
			let subEl = a[j];
			if (subEl - parentEl <= 1) {
				subArrCounter++;
			} else {
				break;
			}
		}
		if (subArrCounter > largestSubArrCounter) largestSubArrCounter = subArrCounter;
	}
	return largestSubArrCounter;
}

const numbers = [ 4, 6, 5, 3, 3, 1 ];

console.log(pickingNumbers(numbers));

/**
 * sort the array to make the  comparison process between all the elements of subarray easier
 * loop over the array.
 * create a subArrCounter variable = 1 (it alawys has one element we start with) in which we will store the length of the subarray that matches our conditions.
 * create a largestArrCounter variable that will store the largest possible length of subArr the matches the condition from all possible subArray we get during our program.
 * make a nested loop that iterates through the array starting from the next index.
 * start check that each element in the nested loop makes a difference of 0 or 1 with the parent element from the upper loop.
 * make a subArrCounter that calculates the.
 * if the condition is not met, break.
 * if it is met then that means that the element makes a difference of 1 or 0 between the first element and hence it makes the same condition with any element in between because the array is sorted, then increase the subArrCounter by 1 
 * after the nested loop is done, calculate to see if the subArray we got is bigger in length than previous subArrays, if so, replace the old largestArrCounter variable with the new value of subArrCounter
 */
