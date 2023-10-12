// Write a polyfill of map (same function which works as array map does)

// let arr = [1,2,3,4,5];
// arr.map(()=>{})
// ek call back function letahe or array.map(function(currentValue, index, arr), thisValue)

// let arr = [1,2,3,4,5];

Array.prototype.myMap = function(callBackFun){
    let newArr = [];
    // if(this.length == 0)
    // {
    //     throw new TypeError("Array me kuch nhi he ")
    // }
    for(let i = 0 ;i<this.length;i++)
    {
       newArr.push(callBackFun(this[i],i,this)) 
    }
    return newArr;
}
let arr = [1,2,3,4,5];
console.log(arr.myMap((num , i , arr)=>{ return num*2+i;}))