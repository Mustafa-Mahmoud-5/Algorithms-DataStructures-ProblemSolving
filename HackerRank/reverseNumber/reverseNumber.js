const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp;
}

const reverse = (x) => {

    if(!x) return 0;

    let myNum = `${x}`;
    let numArr = [];

    for (let i = 0; i < myNum.length; i++) {  
        numArr.push(+myNum[i])
    }
    
    let left = 0;
    let right = numArr.length - 1;

    
    while(left < right) {

        if(isNaN(numArr[left])) numArr.shift(numArr[left])

        swap(numArr, left, right)
        left++;
        right--;
    }

    if(x < 0) {
        numArr.unshift('-')
    }

    const reversedNum = numArr.join('')

    return +reversedNum;
}

console.log(reverse(-123456));
