const idInput = document.getElementById("idInput");
const idSubmit = document.getElementById("idSubmit");
const todolist = document.getElementById("todolist");


const handleTaskSubmit = async (event) => {
    event.preventDefault();

    let idInputVal = idInput.value;

    if(idInputVal === " " || idInputVal < 0 || idInputVal >200)
    {
        alert("Enter a Valid Id")
        return;
    }

    idSubmit.innerText = "Adding";

    const todoDataResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${idInputVal}`)
    
}