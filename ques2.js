console.log("Question 2");
// "2. Find if the given number exists in an array - ( do not use built-in function ) [11,34,22,21,5,22] -> find 21 if exists return true otherwise false

const myFind = (arr, findValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findValue) {
      return true;
    }
  }
  return false
};
let arr =  [11, 34, 22, 21, 5, 22]

console.log(myFind(arr, 21));