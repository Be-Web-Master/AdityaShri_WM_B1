// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// function groupAnagrams(strs) - this will return array of grouped anagrams
function groupAnagrams(strs){
    const arrayObj = {};
    for(const arr of strs){
        const sort = arr.split('').sort().join('');
        console.log(arrayObj[sort])
        if(arrayObj[sort]){
            arrayObj[sort].push(arr)
        }
        else{
            arrayObj[sort]=[arr];
        }
    }
    const group = Object.values(arrayObj);
    return group;
}
const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))