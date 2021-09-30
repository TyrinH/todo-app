const todoForm = document.querySelector('#todoForm');
const storedTodos = document.querySelector('#storedTodos');

todoForm.addEventListener('submit', function (e){
    e.preventDefault();

    const todoInput = todoForm.elements.todo;
    addTodo(todoInput.value)
    todoInput.value = '';
})

const addTodo = (todo) => {
    const newTodoDiv = document.createElement('div');
    const todoData = document.createElement('li');
    const trashCan = document.createElement('span')
    todoData.append(todo);
    trashCan.innerHTML = '<i class="fas fa-trash-alt"></i>'
    todoData.append(trashCan);
    newTodoDiv.append(todoData);
    newTodoDiv.append(trashCan)
    // bTag.append(todo);
  //  newTodo.append(bTag);
    storedTodos.append(newTodoDiv);


}

storedTodos.addEventListener('click', function (e) {
    e.target.nodeName === 'I' && storedTodos.remove();
})