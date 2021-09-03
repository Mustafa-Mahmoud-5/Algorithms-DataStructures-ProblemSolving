// the idea is that new Array(num) will make an array of empty fields
// if we joined this kind of array (let`s say have 3 empty elements) with a seperator like - it will make empty-empty-empty which mean we will make --
// so the idea is that we can make ### from an arr of 4 elements (n elements make n-1 shapes)
// to make a triangle from right to left, we want to know the biggest element let`s say 4, then we will have maximum a line of 4 hashed
// then every time we need to fill 4 spaces, for the first time we need to fill it with 1 hash, 3 spaces then 2 hashes 2 spaces and so on
// we can make the hashes by exploiting the i by making an array of empty elements using Array(2+i) >> 2 because to make at least one # we need two elements and we start from 0
// we can make spaces with new Array(n-i) n because it will be 4 and i will be 0 so we want to at least start with 4 to make 3 spaces
// then add the spaces to the hashes
const triangle = n => {
	for (var i = 0; i < n; i++) {
		var spaces = new Array(n - i).join(' ');
		var hashes = new Array(2 + i).join('#');
		console.log(spaces + hashes);
	}
};
const num = 4;
console.log(triangle(4));
