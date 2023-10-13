// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }

    return strs.reduce((commonPrefix, str) => {
        let i = 0;
        while (i < commonPrefix.length && i < str.length && commonPrefix[i] === str[i]) {
            i++;
        }
        return commonPrefix.slice(0, i);
    }, strs[0]);
}


const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); 

