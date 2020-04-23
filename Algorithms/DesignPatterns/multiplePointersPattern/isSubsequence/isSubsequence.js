// make a function that takes two strings, you should check if the chars of the first string are existed in the the second char


const isSubsequence = (str1, str2) => {
    // if the str1 length is 0 which means that it is "" then return true(the output needs this case to return true)

    if(str1.length ===0) return true

    // make the two pointers

    // for str1
    p1 = 0;
    // fir str2
    p2 = 0;

    // loop trough the biggest array which is str2
    while(p2 < str2.length){
        // if str1 char equals to corropsonding str2 char then that means the the str1 succeed to find a corrosponding char in str2, then we move to the next char in str1 to keep checking
        if(str1[p1] === str2[p2]) p1++
        // if str1 char not equal to corrosponding str2 char then increase str2 pointer to check the next char in str2
        else p2++
    }

    // if the p1 is equal to str1.length, that means the str1 has succed to find a corrosponding char in str2 where we have a logic that increases p1 each time we find a corrosponding char to it, and that will be true, else return false
    return p1 === str1.length


}

console.log(isSubsequence('sing', 'sting'));
