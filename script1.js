// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
// consisting of non-space characters only.
// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.
function findLength(str){
    str = str.trim();
    const string = str.split(" ");
    const lastWord = string[string.length - 1];
    return lastWord.length;

}
const str = " fly me to the moon "
console.log(findLength(str));
