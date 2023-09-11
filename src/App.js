import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"

// get localStorage data 

const getLocalData = () =>{
  let list = localStorage.getItem("Task")
  console.log(list)
  if(list)
  {
    return JSON.parse(localStorage.getItem("Task"));
  }
  else{
    return [];
  }
} 
function Task() {
  const [input, setInput] = useState("")
  const [desc, setDesc] = useState("")
  const [data, setdata] = useState(getLocalData())



  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(input)
    // const newData = [data,...input]
    const newData = ([...data,{input,desc}])
    setdata(newData)
    setInput("")
    setDesc("")
    console.log(data)
  }
  let showList = <h2>No task</h2>
  if(data.length > 0){
    showList = data.map((obj ,idx) =>{
      return <li id='card' key={idx}>{obj.input}<span> {obj.desc} </span><button onClick = {() => {
        let copy = [...data]
        copy.splice(idx,1)
        setdata(copy)
      }}>X</button></li>
    })
  }

  // add data to Local Storage 
  useEffect(() => {
    localStorage.setItem("Task",JSON.stringify(data))
  }, [data])
  



  return (
   <>
    <form  onSubmit={submitHandler}>
      <input type="text" id='input' placeholder="Enter the Title" value={input} onChange={(e) =>{
        setInput(e.target.value)
      }}/>
      <input type="text" id='desc' placeholder="Enter the Desc" value={desc} onChange={(e) =>{
        setDesc(e.target.value)
      }}/>
      <button id='submitbtn' type="submit">submit</button>
    </form>
    <hr/>

    <div>
      <ol>
        {showList}
      </ol>
    </div>
    
    </>
  );
}

export default Task;
