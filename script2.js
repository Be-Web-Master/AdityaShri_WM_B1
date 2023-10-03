// task2
function getLeftSwappedArrayByIndex(arr,swapLeftBy){
  const leftPart = arr.slice(0, swapLeftBy);
  const rightPart = arr.slice(swapLeftBy);
  return [...rightPart, ...leftPart];
}
const arr = [1,2,3,4,5,6]
const swapLeftBy = 3
var ans = getLeftSwappedArrayByIndex(arr,swapLeftBy)
console.log(ans);