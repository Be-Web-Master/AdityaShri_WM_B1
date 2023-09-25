console.log("Question 1");

// "1. Capitalize first letter of the string -> "webmaster" -> "Webmaster"."

let str = "webmaster";





// const firstLetterUpperCase= (str)=>{
//    let arr = [...str];
//    let first = arr[0].toUpperCase()
//    arr[0]=first
//    return arr.join("")
// }
// console.log(firstLetterUpperCase(str));


const firstLetterUpperCase= (str)=>{
    let arr = [...str];
    let first = arr.shift().toUpperCase()
     arr.unshift(first)
     return arr.join("")

 }
 console.log(firstLetterUpperCase(str));