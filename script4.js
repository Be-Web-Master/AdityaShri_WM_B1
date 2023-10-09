// Remove same character from a string if it exists 3 times
// const string = "aabbaa"
// output - "bba"
// function removeSubstring(string) - this function will return string
// explanation - a appeared 3 times so we have remove 3 a's
// b appeared 2 times so can't remove
// last a will not be removed bcoz we don't have another 2 a's in the string
function removeSubstring(string){
    let count = 1;
    let ans = " ";
    let three =3;
    for(let i=0;i<string.length;i++){
        
        if(string[i] === string[i-1]){
            count++;
        }
        else{
            if(count < three){
                ans += string [i-1]
            }
            count = 1;
        }
    }
    return ans;
}
const string = "aabbaa"
const ans = removeSubstring(string);
console.log(ans);
