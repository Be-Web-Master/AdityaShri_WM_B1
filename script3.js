// Easy - Find the peak of the mountain
// const arr = [ 1,2,4,3,6,3,1 ]
// output - 6
// function getPeak(arr) - this function will return peak of the mountain, 6 is greater among all so 6 is the peak

function getPeak(arr){
    let max = arr[0];
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
    return max;
}
const arr = [ 1,2,4,3,6,3,1 ]
console.log(getPeak(arr))
