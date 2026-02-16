let list = document.getElementById("list");

function addTask() {
    let takeInput = document.getElementById("task");
    let task = takeInput.value;

    if (task === "") {
        alert("Please Enter a Task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task + '<button onclick="deleteTask(this)">❌</button>';
    list.appendChild(li);
}
function deleteTask(btn) {
    btn.parentelement.remove();
}
