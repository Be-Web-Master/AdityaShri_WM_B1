console.log("Question 4");

const people = [
    {name:"a",age:21},
    {name:"b",age:33},
    {name:"c",age:22},
    {name:"d",age:34},
    {name:"e",age:22},
    {name:"f",age:33},
  ]
  const result = {};
  
  people.map((arr)=>{
    if(result[arr.age]){
      result[arr.age] = [...result[arr.age],arr]
    }
    else{
      result[arr.age]=[arr]
    }
    // console.log(arr)
  })
  console.log({result})