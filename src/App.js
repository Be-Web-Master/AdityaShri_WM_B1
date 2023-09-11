import logo from './logo.svg';
import './App.css';
import {useState} from "react"
function Task() {
  const [input, setInput] = useState("")
  const [data, setdata] = useState([])



  const submitHandler = (e) =>{
    e.preventDefault()
    console.log(input)
    // const newData = [data,...input]
    const newData = ([...data,{input}])
    setdata(newData)
    setInput("")
    console.log(data)
  }
  let showList = <h2>No task</h2>
  if(data.length > 0){
    showList = data.map((obj ,idx) =>{
      return <li id='card' key={idx}>{obj.input} <button onClick = {() => {
        let copy = [...data]
        copy.splice(idx,1)
        setdata(copy)
      }}>X</button></li>
    })
  }
  return (
   <>
    <form  onSubmit={submitHandler}>
      <input type="text" id='input' placeholder="Enter the Task" value={input} onChange={(e) =>{
        setInput(e.target.value)
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
