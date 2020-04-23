// create a function that takes a sorted array and then return an array of the two numbers that their sum are zero, if there`s no such case, return undefined

const sumZero = (arr) => {  

    // loop through the array from the beginning
    for(el of arr) {
        // loop through the array from the second item
        for(nEl of arr) {
            // check if the first element + nested element =0 then return array of these values

            if(el + nEl === 0) {
                return [el, nEl]
            }
        }
    }

    // otherwise return undefined
    return undefined
}

console.log(sumZero([-1, 0, 1, 2]));


// ____________another solution using the multiple pointers pattern_________

// the multiple pointers pattern works on sorted arrays to check if some item in the array has a specific relation with another item in the same array (like two elements their sum is zero for instance) and the idea is instead of comparing with a nested loop like the above example, we can make two pointers [let`s say one at the end and one at the beginning of the array] and then starting to compare each item from the beginning to each item from the end and keep going to the middle of the array till the condition come true


const sumZero2 = (arr) => {

    // make pointers
    let left = 0
    let right = arr.length -1



    // keep checking while the left pointer is smaller than the right pointer to prevent comparing 0-0 = 0
    while( left < right) {

        // check if the two pointers value are equal then return an array of these values, else if the result > 0 that means we want to decrease the pointer from the greater side and go head to the middle else if result < 0 that means we want to increase the pointer from the left side so we go head to the middle

        if(arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]];
        }
        // if the result of adding two pointers is positive then go to middle from right(that means decrease the index or pointer from right)
        else if (arr[left] + arr[right] > 0) {
            right--
        }
        // if the result of adding two pointers is negative then go to middle from left(that means increase the index or pointer from left)
        else{
            left++
        }
    }
    // if no condition comes true, return undefined(optional)
    return undefined;
}

console.log(sumZero2([-5, -4, -1, 0, 2, 3, 4, 6]));
