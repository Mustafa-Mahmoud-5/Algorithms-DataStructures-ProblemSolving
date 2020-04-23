// make a function that takes a string and a char or group of chars to search for this char or a group of chars inside the big string, and return the amount of the existance of this char/group of chars 

const stringSearch = (string, target) => {

    // make the counter to count the amount of existance of this char
    let counter = 0;

    // loop through the big string
    for(let i = 0; i< string.length; i++){
        // loop through the small string
        for(let j =0; j < target.length; j++) {
            // we want to check if each char is equal to the corrosponding char, but how we do that since we have no equal arrs ? we do it by checking if target[j] === string[i+j], the idea here that string[i+j] will count the whole three or whatever elements in parallel
            if(string[i+j] !== target[j]) {
                break;
            }
            // we want to check if j = target.length so that `ll indicate that we`ve looped through the entire small string and that will mean tat each char in the small string found a char in the big string
            if(j === target.length-1) {
                counter++
            }
        }
    }

    return counter;
}

console.log(stringSearch('helloworld', 'low'));
