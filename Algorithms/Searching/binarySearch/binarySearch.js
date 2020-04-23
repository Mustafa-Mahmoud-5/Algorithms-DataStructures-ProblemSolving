// search for a specific item in an array(must be sorted) using the binarySearch algorithm

const binarySearch = (arr, val) => {

    // make the left pointer and the right pointer then make the middle pointer using the median rule
    let left = 0;
    let right = arr.length-1
    let middle = Math.floor((left + right) / 2)

    // keep looping while middle isn`t equal to our required val and also while left <= right to prevent go inside nested loop if the value isn`t existed in the arr
    while(left <= right && arr[middle] !== val) {

        // if the val we searching for is > than the middle. then that mean that the val isn`t in the left side, then we `ll move the left side to start after the middle
        if(val > arr[middle]) left = middle+1;

        // if the val we searching for is < than the middle. then that mean that the val isn`t in the right side, then we `ll move the right side to start before the middle
        if(val < arr[middle]) right = middle-1;


        // change the value of the middle after everu changing in the left or right value
        middle = Math.floor((left + right) / 2)

    }

    if(arr[middle] === val) return middle

    return -1
}

console.log(binarySearch([1, 12, 13, 18, 25, 30, 40, 42, 43, 50, 60, 100 ], 42));
