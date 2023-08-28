const todoList = ['Quit my job', 'Go get Donuts', 'Have a nap', 'Walk the dog']
const todoStatus = [false, false, false, false]
const todoImportance = [false, false, false, false]

function addTask() {
    // Get the item value  
    const newTodo = document.getElementById('new-task-text').value

    // Push this item to my todoList
    todoList.push(newTodo)

    // Update my todo list
    updateTodoList()
}

function updateTodoList() {
    const todoListElement = document.getElementById('todo-list')
    todoListElement.innerHTML = ''
    for (const [index, todo] of todoList.entries()) {
        const newTodoText = document.createElement('p') // <p></p>
        newTodoText.innerHTML = todo // <p>Quit my Job</p>


        const markImportantButton = document.createElement('input')
        markImportantButton.type = 'button'
        markImportantButton.onclick = function() {
            toggleImportant(index)
        }
        markImportantButton.value = 'Important'



        const markImportanceUp = document.createElement('i') // <i></i>
        markImportanceUp.type = 'button'
        markImportanceUp.className = 'arrow up'
        markImportanceUp.onclick = function() {
            moveTaskUp(index)
        }

        const markImportanceDown = document.createElement('i') // <i></i>
        markImportanceDown.type = 'button'
        markImportanceDown.className = 'arrow down'
        markImportanceDown.onclick = function() {
            moveTaskDown(index)
        }


        const markCompleteButton = document.createElement('input') //<input></input>
        markCompleteButton.type = 'button' // <input type="button"></input>
        markCompleteButton.onclick = function() {
            toggleComplete(index)
        }
        markCompleteButton.value = 'Complete' // <input type="button" value="Complete" />

        const controlTaskButtons = document.createElement('div')
        controlTaskButtons.appendChild(markImportantButton)
        controlTaskButtons.appendChild(markImportanceUp)
        controlTaskButtons.appendChild(markImportanceDown)
        controlTaskButtons.appendChild(markCompleteButton)

        const newTodo = document.createElement('li')
        newTodo.appendChild(newTodoText)
        newTodo.appendChild(controlTaskButtons)


        if (todoStatus[index] === true) {
            newTodo.classList.add('complete')
        }

        if (todoImportance[index] === true) {
            newTodo.classList.add('important')
        }

        todoListElement.appendChild(newTodo)
    }
}

// const todoList = ['Quit my job', 'Go get Donuts', 'Have a nap', 'Walk the dog']
// const todoStatus = [false, false, false, false]
function toggleComplete(index) {
    todoStatus[index] = !todoStatus[index]
    updateTodoList()
}

function toggleImportant(index) {
    todoImportance[index] = !todoImportance[index]
    updateTodoList()
}

function moveTaskUp(index) {
    if (index > 0) {
        //Swap the tasks in the todoList array
        const tempTodo = todoList[index]; // we use a temporary variable tempTodo to store the task at the current index
        todoList[index] = todoList[index - 1]; // we replace the task at the current index with the task at the previous index 
        todoList[index - 1] = tempTodo; // Finally, we place the task from tempTodo into the previous index.

        // Swap the task statuses in the todoStatus array

        const tempStatus = todoStatus[index];
        todoStatus[index] = todoStatus[index -1];
        todoStatus[index - 1] = tempStatus;

        //Update the todo list display
        updateTodoList();

    }
}

function moveTaskDown(index) {
    if (index < todoList.length - 1) {
        //Swap the tasks in the todoList array
        const tempTodo = todoList[index]; 
        todoList[index] = todoList[index + 1]; 
        todoList[index + 1] = tempTodo; 

        // Swap the task statuses in the todoStatus array

        const tempStatus = todoStatus[index];
        todoStatus[index] = todoStatus[index + 1];
        todoStatus[index + 1] = tempStatus;

        //Update the todo list display
        updateTodoList();

    }
}

updateTodoList()