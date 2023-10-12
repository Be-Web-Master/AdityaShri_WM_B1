// Write a function to find dublicates elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [1,4,6]
// function getDublicates(arr) - this function will return array of dublicates in O(n)
function getDublicates(arr){
    let seen ={};
    let newArr = [];
    for(let i=0;i<arr.length;i++)
    {
        if(seen[arr[i]]){
            if(seen[arr[i]] === 1){
                newArr.push(arr[i]);
            }
            seen[arr[i]]++;
        } else {
            seen[arr[i]] =1;
        }
    }
    return newArr
}

const arr = [1,1,2,3,4,4,4,5,6,6,7]
console.log(getDublicates(arr))