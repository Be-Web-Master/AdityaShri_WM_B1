// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

function itspalindrome(num){
    let sum = 0
    let temp = num;
    while(num>0)
    {
        let digit = num%10;
        sum = (sum*10)+digit;
        num = Math.floor(num/10);
    }
    if(temp === sum){
        console.log("Number is Palindrome")
    }
    else{
        console.log("Number is not a palindrome")
    }
    return 0;
}

let num = 11122111;
itspalindrome(num);