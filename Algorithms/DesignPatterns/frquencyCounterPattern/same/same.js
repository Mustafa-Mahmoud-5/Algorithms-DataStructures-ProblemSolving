// write a function called same, that takes two arrays, the elements of the second arrays must be squared the elements of the first array elements, it can be mixed up (not in order), if this is true, return true, other wise reutn false



// ________________Solving the problem using nested loop O(n^2)________________

let same = (arr1, arr2) => {

    // first of all we `ll compare if two arrays are equal in length because if they`re not, then there `s no need for more operations
    if(arr1.length !== arr2.length) {
        return false;
    }


    // looping through the elements of the first array
    for (el of arr1) {
        // look for the corrosponding squared element in arr2 using indexOf
        let relatedIndex = arr2.indexOf(el ** 2)
        
        // if the index === -1 (means the element not found) then we`re done because we have an element in arr1 that doesn`t has a corrosponding element in arr2 so we don`t need to compare the other elements
        if(relatedIndex === -1) {
            return false;
        }

        // if the related index > -1 which means we found the corossponding item, then we need to remove the corrosponding item from arr2 to prevent comparing same number of arr1 as this program shouldn`t compare arrays like [1,3,3] , if we didn`t remove the corrosponding item, it will go and look for the same arr2 item which is also 9 so that 9 will get along with arr1[1], arr1[2]
        else{ 
            arr2.splice(relatedIndex, 1)
        }

    }
    return true
}

console.log(same([1,2,4,4], [16,4,1,16]));





//____________Solving the same problem using Frequency Counter Pattern________

// this design pattern depends on converting the data we want to get into objects and then compare the two objects in an individual loop, this will avoid using nested loops so avoid the big O(N^2) and will use big O(N) instead and all of that depends on the idea that we can access elements easily in objects without any order

let same2 = (arr1, arr2) => {

    // comparing the two array length, if not equal then we done and its false
    if(arr1.length !== arr2.length) {
        return false
    }

    // defining the two objects that `ll take the arrays elements
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};


    // pushing the arrays elements in that object(with their counters)
    
    // first array
    for(el of arr1) {
        frequencyCounter1[el] = ++frequencyCounter1[el] ||  1;
    }

    for(el of arr2) {
        frequencyCounter2[el] = ++frequencyCounter2[el] ||  1;
    }
    
    console.log(frequencyCounter1, frequencyCounter2)
    // now we have the two objects that has the arrays elements as keys and their counters as values



    // making a loop over the obj1 and check if each element exists in obj2 and also check if the counter each individual item in obj1 has the same counter of the corrosponding element in obj2

    for(let key in frequencyCounter1) {
        // check if each key in obj1 exist in obj2
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        // check if the current key its corrosponding square has the same  counters(this is addition and depends on the idea that each element in arr1 must have its own corrosponding element in arr2 and not allowing the sharing of two same elements in arr1 with unique element in arr2 )
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2] ) {
            return false    
        }
    }
    return true
}
console.log(same2([1,2,4,4], [16,4,1,16]));

