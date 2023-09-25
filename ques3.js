console.log("Question 3");
// Reverse an array. [1,2,3,4,5,6] -> [6,5,4,3,2,1] (do not use built-in method)

const reverseArray = (arr) => {
  let brr = [];
  for (let i = arr.length-1; i >= 0; i--) {
    brr.push(arr[i]);
  }
  return brr;
};
const reverseArr =reverseArray([1, 2, 3, 4, 5, 6])
console.log(reverseArr);