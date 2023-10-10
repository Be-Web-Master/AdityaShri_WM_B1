// Easy - Capitalize first letter of every string in an array
// const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
// output - [ "Abcd", "Pqrs", "Xyz", "Lmno" ]
// function capitalizeFirstChar(arr) - this function will return array of strings with the first character as capital
function capitalizeFirstChar(arr) {
    let array = arr.map((elem)=>{
        if(elem.length>0){
            return elem[0].toUpperCase() + elem.slice(1);
        }
        else{
            return elem;
        }
    })
    return array
}
const arr = [ "abcd", "Pqrs", "xyz", "lmno" ]
console.log(capitalizeFirstChar(arr));