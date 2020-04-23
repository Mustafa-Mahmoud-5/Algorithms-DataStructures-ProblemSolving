// make a function that takes two strings and check if the two strings have the same words and also the repeated words are equal in amount (solve this algortihm using the frquency counter pattern)

// 1- solving using nested loop big O(N^2)
const anagram = (str1, str2) => {

    for(el of str1) {
        if(!(str2.includes(el))) {
            return false;
        }
    }

    return true
}

// console.log(anagram('cinemaa', 'iceman'));


// 2- solving using frequency counter patter big O(n)

const anagram2 = (str1, str2) =>{


    // making the frequencyCounters objects
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};


    // pushing the strings data in these in the objects

    for(char of str1) {
        // if the obj has the char(true) then increament it otherwise set it to 1
        frequencyCounter1[char] = ++frequencyCounter1[char] || 1  
    }

    for(char of str2) {
        // if the obj has the char(true) then increament it otherwise set it to 1
        frequencyCounter2[char] = ++frequencyCounter2[char] || 1  
    }

    console.log(frequencyCounter1, frequencyCounter2);
    

    // looping through the frequencyCounter1 obj and make some checking(if each key exist in the frequencyCounter2 obj, and also if each key in obj1, its corossponding key in obj2 counter is the same. then return true )

    for(let key in frequencyCounter1) {
        // check if each char exists in the other array
        if(!(frequencyCounter2[key])){
            return false;
        }

        // also check if each key(char), its corrospinding key(char) has the same amount of chars
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }

    return true
}

console.log(anagram2('cinemas', 'icemank'));
