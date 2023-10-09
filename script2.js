// Question 2
// Implement Quick Sort
// const arr = [5,3,4,6,11,2,1]
// output - [1,2,3,4,5,6,11]
// function quickSort(arr) - this function will return an sorted array in ascending order
function quickSort(arr) {
    const p = arr[0];
    const left = [];
    const right = [];

    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), p, ...quickSort(right)];
}

const arr = [5, 3, 4, 6, 11, 2, 1];
const sort = quickSort(arr);

console.log(sort); 
