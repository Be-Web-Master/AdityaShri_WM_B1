const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const age = document.getElementById("age")
const phone = document.getElementById("phone")
const male = document.getElementById("male")
const female = document.getElementById("female")
const error = document.querySelector("#error")

function validate(event){
    if( event === 'age' && age.value < 18)
    {
        error.innerText = "bhai adult nhi ho ";
    }
    else if(event === 'phone' && phone.value.length !== 10){
        error.innerText ="10 number nhi he ";
    }
    else{
        error.innerText=""
    }
}
function handleSubmit(event){
    event.preventDefault();
    console.log({
        firstName : firstName.value,
        lastName : lastName.value,
        age :age.value,
        phone : phone.value,
        gender : male.checked ? "male" : "female"
    })
}

let submited = document.querySelector("#submit")
submited.addEventListener("click" , () => {
    submited.innerText="Submitted!"
})