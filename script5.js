// Search an element in 2D array exists or not- do not use built in method (flat and any method for searching)
// const arr = [[1,2,3],[4,5,6],[7,8], [9,12]]
// const search = 7
// output - true
// function searchElement(arr) - this function will return true if elements exists otherwise false

function searchElement(arr,search)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j= 0;j<arr[i].length;j++)
        {
            if(arr[i][j] === search)
            {
                return true;
            }
        }
    }
    return false;
}
const arr = [[1,2,3],[4,5,6],[7,8], [9,12]]
const search = 7
const ans = searchElement(arr,search);
console.log(ans);