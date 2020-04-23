// make a funciton that takes a variable number of arguments, and check if there is any duplicates among these arguments


const isDuplicates = (...args) => {

    let fc = {};

    for(let arg of args) fc[arg] = ++fc[arg] || 1
    
    console.log(fc);
    
    for(let key in fc) {
        if(fc[key] > 1) return true
    }


    return false    
}

console.log(isDuplicates(1, 2, 3, 2))

// this problem can be solved using the multiple pointers design pattern where we can sort the args array then make a pointer at 0 and another at 1 and check if the start === next then that means that there`s a duplication..