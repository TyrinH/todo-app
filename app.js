const todoForm = document.querySelector('#todoForm');
const storedTodos = document.querySelector('#storedTodos');

todoForm.addEventListener('submit', function (e){
    e.preventDefault();

    const todoInput = todoForm.elements.todo;
    addTodo(todoInput.value)
    todoInput.value = '';
})

const addTodo = (todo) => {
    const newTodo = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(todo);
    newTodo.append(bTag);
    storedTodos.append(newTodo);
}

storedTodos.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})