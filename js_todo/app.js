const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Do not add an empty task

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete';
    deleteBtn.classlist.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';

}
