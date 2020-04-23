// the bubble sort is depending on looping through each arr element to sort it by makin a nested loop that check if the curremt element is greter than the next element, then swap

const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
}


const bubbleSort = (arr) => {

    for(let i =0; i< arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr
}

console.log(bubbleSort([10,5,4,6,8,12]));
// but the previous solution is alittle bit dump because we go for the sorting checking process for every element even after sorting the current element, so what we want to do is every time we sort an element(we of course go through the entire process for each element) we need to reduce the amount of elements we want to go checking for as we already know that the last element has already sorted from the previous loop

const bubbleSort2 = (arr) => {



    // start from the arr length(as we `ll start looping from 0 till i-1 which is the last index and this i is decreasing each time as each time we sort a number and put it at the end of the array so we don`t need to check it again)
    for(let i = arr.length; i > 0 ; i-- ) {
        let swapped = true

        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                swapped = false;
            }
        }
        if(swapped) break;
    }


        // performance optimization
        // we know that for each el in the arr we loop through the entire array and check for swaps, but we can get done from just 2 or 3 loops , so if we have 10000+ elements and we have just done sorting from the first 50 loop, the code will keep looping again and checking for swaps but it won`t make

        // to prevent this we can make a variable called noSwap with every loop and set it to true and each time we make a swap we set it to false then we check if the var is true then break the parent loop as it mean we`re done because we haven`t swaped anything again 


    return arr;

}
console.log(bubbleSort2([10,5,4,6,8,12]));


// the bubble sort has bigO(n) best conditions if the arr is already is already sorted
// but in general it is bigO(n^2)
