document.querySelector('#push').onclick = addTask;
document.querySelector('#newtask input').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskInput = document.querySelector('#newtask input');
    if (taskInput.value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${taskInput.value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        let current_tasks = document.querySelectorAll(".delete");
        current_tasks.forEach(task => {
            task.onclick = function () {
                this.parentNode.remove();
            }
        });
        let tasks = document.querySelectorAll(".task");
        tasks.forEach(task => {
            task.onclick = function () {
                this.classList.toggle('completed');
            }
        });
        taskInput.value = "";
    }
}
