function circularArrayRotation(a, k, queries) {
	for (let i = 1; i <= k; i++) {
		const lastIndex = a[a.length - 1];
		a.pop();
		a.unshift(lastIndex);
	}

	const queryArray = [];
	for (let i = 0; i < queries.length; i++) {
		const queriedElement = a[queries[i]];
		queryArray.push(queriedElement);
	}

	return queryArray;
}
const a = [ 3, 4, 5 ];
const k = 2;
const queries = [ 1, 2 ];

circularArrayRotation(a, k, queries);
/* 
FIRST ALGORITHM
1- save the last element
2- pop the last element
3- push the last element

SECOND ALGORITHM
1- save the last element before you loop over the array
2- start from the index before last
3- put each element in the next index
4- reaching the zero index, put in it the last element you saved
*/
