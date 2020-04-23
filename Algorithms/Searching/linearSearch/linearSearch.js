//  make a function that takes an array and a value and check if the value is in that array usinga linear search algorithm

const linearSearch = (arr, val) => {

    for(let i = 0; i< arr.length; i++) 
        if(arr[i] === val) 
            return i
    return -1
}

console.log(linearSearch([1,50,81,16,4,54,32], 81));
