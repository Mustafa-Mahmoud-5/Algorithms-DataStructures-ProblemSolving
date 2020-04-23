// make a function that takes a sorted array and a number, and check if there`s any two numbers in the array their sum are equal to the given num , using the multiplePointers design pattern where the time complexity is bigO(n) return the two numbers that there sum is n

const averagePair = (arr, n) => {

    if(arr.length === 0) return 0

    // make two pointers, one at the start other at the end

    let start = 0;
    let end = arr.length - 1;
    
    // loop through the array from the two sides

    // if the arr[start] + arr[end] > 10 that means that we need to go left towards the small numbers alittle bit, and vice versa

    // since that we loop from two positions, then we`ll use the while loop

    while (start < arr.length) {
        if(arr[start] + arr[end] === n) return [arr[start], arr[end]]
        if(arr[start] + arr[end] > n) end--
        if(arr[start] + arr[end] < n) start++
    }

    return 0
}

console.log(averagePair([1, 3, 4, 5, 6, 10, 12, 19], 10));
