// make a function that takes a sorted array, and count the numbers of the unique values in that array using the multiple pointers design pattern

const countUniqueValues = (arr) => {


    // if the array is empty, then there`s no counting at all and return 0
    if(arr.length ===0) return 0

    // making two pointers, one is 0 and other is 0+1 which is 1
    let p1 = 0;
    let p2 = 1;

    // i got no way to increase the counter at the first item the p1 met so i will use a trick and start it by 1
    let counter = 1 ;
    // make a while loop to keep checking while pointer2(the first pointer that will touch the end) < arr.length
    while(p2 < arr.length) {
        console.log(p1,p2);
        
        if(arr[p1] !== arr[p2]) {
            counter++;
            p1++
            p2++
        }
        else if (arr[p1] === arr[p2]){
            p1++
            p2++
        }
    }
    // make a condition to check if the p1 !== p2 (then that means that we found another unique number) so we need to increase the counter by 1 and also increase the p1,p2 by so we keep checking for next elements
    
    // make a condition to check if the p1 === p2 (then that means that we didn`t find another unique value) so we `ll just increase the p1,p2 to keep checking


    return counter

}

console.log(countUniqueValues([-2,-1,-1,0,1]));

// __________________solving the same example also by using multiple pointers but with using the another cool approach__________________

// this approach depending on making also two pointers, but the first pointer will not increase unless if the element at p1 !== element at p2 then  putting the unique values at the beginning of the array and return the unique valus at the beginning of the array 

const countUniqueValues2 = (arr) => {

    if(arr.length === 0) return 0;

    // p1, p2
    let p1 = 0;
    let p2 = 1;

    // loop throgh the second iterator
    for(let i = p2; i < arr.length; i++) {
        console.log(p1, i);
        // check if p1 !== p2 where p2 will keep looping through the whole array till the end(so that means we found a new unique element, so that means the p1 has no items like it. then we`ll add increament it to see the next one then we need to get this new element at the beginning of the array so when we finish counting, the first items will be unique)
        if(arr[p1] !== arr[i]) {
            p1++
            arr[p1] = arr[i]
        }
    }
    return p1 + 1;
}
console.log(countUniqueValues2([-2,-1,-1,0,1]));

