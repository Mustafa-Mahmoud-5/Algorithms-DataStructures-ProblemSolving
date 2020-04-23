// make a function that takes an array and a number(n) then based on that number, calculate the n consecutive numbers in the array that have the largest sum

const maxSubArrSum = (arr, n) => {

    // if the length of elements in the arr is less than the n(the number of consecutive numbers we want to sum) and that means that if arr.length is 2 and we want to compare 3 consecutive items, then we return null

    if(arr.length < n) return null

    // make a variable that stores the previous operation to compare it with the next operation
    let previousResult = -Infinity;

    // loop through the given array from the beginning but not till the end but till the end - n + 1 so we stop at the nth item from the end to prevent adding non existed elements
    for(let i = 0 ; i < arr.length - n + 1 ; i++) {
        // make a variable that stores the summition for each loop(its value is cleared to be started from 0 each time the loop is repeated)
        let summition = 0;
        // loop through the first n elements and check the sum of the parent and nested elements.
        for(let c = 0; c < n ; c++){
            summition += (arr[i + c])
        }
        if(summition > previousResult) previousResult = summition;
    }

    return previousResult
}

console.log(maxSubArrSum([1,3,5,7,2,4], 3))

// this algorithm has bigO(n^2) which is not good if we deal with large arrays

// we`ll solve it using the sliding window pattern

// the idea behind this pattern is also to loop once or twice like every pattern and avoiding the nested loop, and the algorithm pattern is instead of looping each time throgh a nested n elements to calculate their sum, no we can make an initial  loop to calculate the first n elements, then make another loop on the array and delete the previous element and add the next element

const maxSubArrSum2 = (arr, n) => {


    if(arr.length < n) return null;

    // the previousResult that will be returned
    let previousResult = 0;
    // a variable to hold each operation
    let summition = 0;

    // loop through the first n elements
    for(let i = 0; i < n; i++) {
        previousResult += arr[i] 
    }

    // assign the prevResult to summition to start comparing the summition var with next operation;
    summition = previousResult;


    // make a loop over the array but start from after where  the last operation ended; 
    for(let i = n; i< arr.length; i++) {
        // delete the previous index, and add the next index to summition 
        summition = summition - arr[i - n] + arr[i];

        // check if summition is > previousResult, if true then assign summition to it
        if(summition > previousResult) previousResult = summition;
    }

    return previousResult;
}


console.log(maxSubArrSum2([1,3,5,7,2,4], 3));
