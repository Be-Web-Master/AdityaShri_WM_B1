// Bubble Sort
// in this phele first second first second change krta he or fir jab last element pr ata he to fir vapis se swap hone lagta he of ek aage se matlab i++ se 

// var arr = [98,76,54,34,78,90];

// var bubble = (arr) => {
//     var length = arr.length;

//     for(let i=0; i < length;i++){
//         for(let j=0;j<length;j++)
//         {
//             if(arr[i]<arr[j]){
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }
// bubble(arr);
// console.log(arr);


// Insertation Sort


// var arr = [90,89,7,8,54,32,56];

// var insertationSort = (arr) => {
//     var length = arr.length;

//     for(let i=1 ;i < length;i++){
//         let current = arr[i];
//         let j = i-1;
//         while(j >= 0 && arr[j]> current)
//         {
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = current;
//     }
// }
// insertationSort(arr);
// console.log(arr);



// Selection Sort
var arr = [89,78,56,34,23];




// merge Sort ,  time compexity O(n+m)
// divide an array in a single single array and then
// for example = [8,3,11,1,7,9]
// [8],[3],[11],[1],[7],[9]

// var arr = [8,3,11,1,7,9];
// var anotherArr = arr.map(num => [num])
// // console.log(anotherArr);

// var mergeSort = (arr1,arr2) => {
//     var idx1 = 0;
//     var idx2 = 0;
//     var newArr = [];
//     if(arr1[idx1] < arr2[idx2])
//     {
//        newArr.push(arr1[idx1]) 
//        if(arr1.length - 1 !== idx1){
//         idx1++;
//        }
//        else{
//         newArr.push(arr2.slice(idx2))
//        }
//     }
//     else{
//         newArr.push(arr2[idx2])
//         if(arr2.length - 1 !== idx2){
//             idx2++;
//            }
//            else{
//             newArr.push(arr1.slice(idx1))
//            }
//     }

// }
// console.log(mergeSort())

var arr = [9,8,7,6,5,3];
var anotherArr = arr.map(num => [num]);
console.log(anotherArr)
var newArr = [];

 var mergeSort = (arr1,arr2) => {
        var idx1 = 0;
        var idx2 = 0;
        var newArr = [];
        if(arr1[idx1] < arr2[idx2])
        {
           newArr.push(arr1[idx1]) 
           if(arr1.length - 1 !== idx1){
            idx1++;
           }
           else{
            newArr.push(arr2.slice(idx2))
           }
        }
        else{
            newArr.push(arr2[idx2])
            if(arr2.length - 1 !== idx2){
                idx2++;
               }
               else{
                newArr.push(arr1.slice(idx1))
               }
        }
    }
    