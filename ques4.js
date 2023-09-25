console.log("Question 4");

// "4. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function palindromeCheck(str) {
  let arr = [...str];
  let brr = [...arr].reverse()
  for (let i = 0; i <arr.length; i++) {
    if (arr[i] !== brr[i]) {
      return false;
    }
  }
  return true;
}

let str = "madam";

console.log(palindromeCheck(str));