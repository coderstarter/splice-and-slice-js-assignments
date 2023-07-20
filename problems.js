function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let nums = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(i%2 === 1){
            nums.push(arr[i]);
        }
    }
    return nums;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let nums = [];
    for(let i = arr.length - 1 ; i >= 0 ; i--){
        if(i % 2 === 1){
            nums.push(arr[i]);
        }
    }
    return nums;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let nums = [];
    for(let i = 0 ; i < arr.length ; i++){
        let cur_index = Math.pow(2,i);
        // console.log(cur_index)
        if(cur_index < arr.length){
            nums.push(arr[cur_index]);
        }
        else{
            break;
        }
    }
    return nums;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let nums = [];
    for(let i = 0 ; i < arr.length ; i++){
        let cur_index = Math.pow(n,i);
        // console.log(cur_index)
        if(cur_index < arr.length){
            nums.push(arr[cur_index]);
        }
        else{
            break;
        }
    }
    return nums;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    const middleIndex = Math.floor(arr.length / 2);
    if(arr.length % 2 === 0){
        return arr.slice(0,middleIndex);
    } else {
        return arr.slice(0,middleIndex + 1);
    }
}

function secondHalf(arr) {
    const middleIndex = Math.floor(arr.length / 2);

    // Check if the array length is even or odd
    if (arr.length % 2 === 0) {
        // If the array length is even, return the second half directly
        return arr.slice(middleIndex);
    } else {
        // If the array length is odd, exclude the middle index and return the second half
        return arr.slice(middleIndex + 1);
    }
}


module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}