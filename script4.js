// Implement Debounce function

const btn = document.querySelector(".butto")
const btn_press = document.querySelector(".increment_pressed")
const count = document.querySelector(".increment_count")

var triggerCount = 0
var pressCount = 0

const myDebounce=(cb,d)=>{
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },d);
    }
}
const debouncedCount = myDebounce(()=>{ 
    triggerCount++;
    count.innerHTML = triggerCount;
},800)
btn.addEventListener("click",()=>{
    btn_press.innerHTML = ++pressCount
    debouncedCount();
})

