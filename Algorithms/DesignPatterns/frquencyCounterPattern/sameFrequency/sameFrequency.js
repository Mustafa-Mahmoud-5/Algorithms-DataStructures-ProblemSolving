// make a function that takes two numbers, and check if they have the same numbers and also the same amount of numbers and the algorithm must have bigO(n) (return true or false)


const sameFrequency = (n1, n2) => {

    // change the n1, and n2 types to string to be able to loop through it
    let str1 = n1.toString()
    let str2 = n2.toString()
    
    // check if the str1.length !== str2.length then return false
    if(str1.length !== str2.length) return false

    // make two frequencyCounter objects
    let fc1 = {};
    let fc2 = {};

    // add the values of str1 and str2 to fc1 and fc2
    for(let char of str1) {
        fc1[char] = ++fc1[char] || 1
    }

    for(let char of str2) {
        fc2[char] = ++fc2[char] || 1
    }
    
    // loop through any object and check if each key has a corrosponding key in the other object
    for(let key in fc1) {
        if(!(key in fc2)) return false
        // also check if each key value has the same corrosponding key value
        if(fc1[key] !== fc2[key]) return false
    }

    return true
}

console.log(sameFrequency(5052, 5025));
