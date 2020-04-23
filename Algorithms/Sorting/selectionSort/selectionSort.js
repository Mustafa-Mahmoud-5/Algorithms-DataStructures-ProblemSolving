// selection Sort

const swap = (arr, idx1, idx2) => {
    let first = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = first;
}

// the idea behind the selection sort is instead of what we`ve done in the bubbleSort(checking every two consequenced elements and swap them under a condition) we instead can make a variable to store the index of the smallest number and then compare if arr[j] is smaller than arr[smallest] then the new index of the smallest `ll be j and then after each nested loop we may end up with a new value of smallest then make the swap but for performance optimization we can make a prior check for checking if i !== smallest as we know that the smallest variable always start with arr[i]  

const selectionSort = (arr) => {


    for(let i = 0; i< arr.length; i++) {
        let smallest = i;

        for(let j = i+1; j < arr.length; j++) {
            
            if(arr[j] < arr[smallest]) {
                smallest = j
            }
        }

        // swap
        if(smallest !== i) {
            swap(arr, i, smallest)
        }
    }

    return arr
}

console.log(selectionSort([10,5,4,9,2,4,3,8]));
// selectionSort is better than bubbleSort but it also has bigO(n^2)