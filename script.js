const inputBox = document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");

function addTask(){

    if(inputBox.value === ""){
        alert("Please enter some data....")
    }

    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveTask();
    inputBox.value = "";
}
listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTask();
})
function saveTask(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
