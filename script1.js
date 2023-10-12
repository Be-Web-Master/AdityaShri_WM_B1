// Write a polyfill of reduce (same function which works as array reduce does)

let arr = [1,2,3,4,5];

Array.prototype.myReduce = function(callBackFun,initialValue){
    if(this.length == 0)
    {
        throw new TypeError("Array me kuch nhi he ")
    }
    let prev = initialValue;
    for(let i = prev ? 0 : 1;i<this.length;i++)
    {
        prev = callBackFun(prev ? prev : this[0],this[i],i,this,)
    }
    return(prev)
}
console.log(arr.myReduce((a,b)=>{return a+b}))