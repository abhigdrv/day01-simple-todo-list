const addButton = document.getElementById('addButton');
const task = document.getElementById('task');
const taskList = document.getElementById('taskList');

document.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})
function addTask(){
    if(task.value){
        const li = document.createElement('li');
        li.className = "bg-[#efefef] p-[10px] my-1";

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox'
        checkbox.className = "mr-[10px]";
        checkbox.onclick = (event) => markCompleted(event)

        const button = document.createElement('button');
        button.className = "border border-1 border-[#e56161] px-1 rounded float-right text-[#e56161]";
        button.innerText = "Delete"
        button.onclick = (event) => deleteRask(event)

        const span = document.createElement('span');
        span.innerText = task.value;

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(button);

        taskList.appendChild(li);
        task.value = '';
    }
}

function deleteRask(event){
    console.log(event);
    event.target.parentElement.remove();
}

function markCompleted(event){
    event.target.parentElement.classList.toggle('line-through');
}