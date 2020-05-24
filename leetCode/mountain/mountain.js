const validMountainArray = (A) => {

    // no mountain contains side and vertix only
    if(A.length <= 2) return false

    let start = 0;
    // count while going up
    while(A[start] < A[start + 1] && start < A.length) start++
    console.log(start);

    // after finishing going up, check if the peak is still the first elem or last elem, if true, then this array isn`t a mountain, return false
    if(start === 0 || start === A.length - 1) return false

    // count while going down
    while(A[start] > A[start + 1] && start < A.length) start++

    // at the end if every thing was ok, we will end up with counter being A.length - 1 because the last check will compare A[start] > A[start + 1](undefined), so we will decrease 1 from the length when comparing them
    console.log(start);
    
    return start === A.length -1  
};

console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9]));
