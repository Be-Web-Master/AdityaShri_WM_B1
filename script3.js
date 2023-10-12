// Write polyfill of filter (same function which works as array filter does)
// array.filter(function(currentValue, index, arr), thisValue)
Array.prototype.myFilter = function(callBackFun)
{
    let newArr = [];
    if(this.length == 0 )
    {
        throw new TypeError("Bhai phele value to daal");
    }
    for( let i=0;i<this.length;i++)
    {
        if(callBackFun(this[i],i , this))
        newArr.push(this[i])
    }
    return newArr
}
const arr = [10,11,34,56,32,17]
const ans = arr.myFilter((elem)=>{
    return elem<18;
})
console.log(ans);