// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
function consecutive(num){
    let maxCount = 0;
    let currentCount = 0;
    for(let i=0;i<num.length;i++){
        if(num[i] === 1){
            currentCount++;
        }
    else{
        maxCount = Math.max(maxCount,currentCount)
        currentCount = 0;
    }
    }
    maxCount = Math.max(maxCount,currentCount)
    return maxCount;
}
const num = [1,1,1,1,0,0,0,1,1,0];
console.log(consecutive(num))