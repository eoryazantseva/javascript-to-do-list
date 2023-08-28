const todoList = ['Quit my job', 'Go get Donuts', 'Have a nap', 'Walk the dog']
const todoStatus = [false, false, false, false]

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

        const markCompleteButton = document.createElement('input') //<input></input>
        markCompleteButton.type = 'button' // <input type="button"></input>
        markCompleteButton.onclick = function() {
            toggleComplete(index)
        }
        markCompleteButton.value = 'Complete' // <input type="button" value="Complete" />

        const newTodo = document.createElement('li')
        newTodo.appendChild(newTodoText)
        newTodo.appendChild(markCompleteButton)
            /**
             * <li>
             *  <p>Quit My Job</p>
             *  <input type="button" value="complete" />
             * </li>
             */

        if (todoStatus[index] === true) {
            newTodo.classList.add('complete')
        }

        todoListElement.appendChild(newTodo)
    }
}

// const todoList = ['Quit my job', 'Go get Donuts', 'Have a nap', 'Walk the dog']
// const todoStatus = [false, false, false, false]
function toggleComplete(index) {
    todoStatus[index] = true;
    updateTodoList()
}

updateTodoList()