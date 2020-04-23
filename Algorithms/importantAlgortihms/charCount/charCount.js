// make a function that takes a string and returns an object of string keys and its number of iteration in the string


let charCount = (str) => {

    // make the result obj
    let result = {};

    // loop through the string and output the letters as keys in the obj

    for(let char of str){

        let letter = char.toLowerCase();


        // check if the letter exists in the object(then increament its value by 1) or check if the letter does not exist, (then add the letter as a key in obj and set its val to 1)

        // if(result[letter] > 0) {
        //   result[letter]++;
        // }
        // else{
        //     result[letter] = 1;            
        // }

        // this is a shorter alternative(it checks if the result has a key of letter , if true it will add it by 1 else it will assign it to 1(which will be initially))
        result[letter] = ++result[letter] || 1
    }


    
    // return the result obj
    return result;
}

console.log(charCount('Mustafa 5')
);


