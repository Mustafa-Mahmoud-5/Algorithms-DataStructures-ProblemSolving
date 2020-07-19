const thirdMax = (nums) => {

    if(nums.length < 3) return nums[nums.length - 1]

    let counter = 0;
    let third;

    for (let i = 0; i < nums.length; i++) {
        
        if(nums[i] !== third && counter < 3) {
            third = nums[i]
            counter++
        }     
    }

    return third
}

console.log(thirdMax([4,4,5,6]));
