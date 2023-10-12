// Write a function to find unique elements without using an set and map, do it O(n), do not use nested loops
// const arr = [1,1,2,3,4,4,4,5,6,6,7]
// output - [2,3,5,7]
// function getUniqueNumbers(arr) - this function will return array of unique numbers in O(n)

function getUniqueNumbers(arr) {
    const seen = {};
    const unique = [];
  
    for (const element of arr) {
      if (seen[element]) {
        seen[element]++;
      } else {
        seen[element] = 1;
      }
    }
  
    for (const element in seen) {
      if (seen[element] === 1) {
        unique.push(parseInt(element, 10));
      }
    }
  
    return unique;
  }
  
  const arr = [1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7];
  const result = getUniqueNumbers(arr);
  console.log(result); 
  