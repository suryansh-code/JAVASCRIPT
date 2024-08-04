const todoObject = [{
  name:'',
  date:''
}];
renderTodoList();


function renderTodoList()
{
    let todoListHTML = '';

    for(let i=0 ; i<todoList.length ;i++)
      {
          const todo = todoList[i];
          const name = todo
          const html = `<p>
                        ${todo}
                        <button onclick="todoList.slice(${i} , 1) ; revderTodoList() ;">DELETE</button>
                        </p>`;

          todoListHTML += html;
      }

      console.log(todoListHTML);

      document.querySelector('.js-div').innerHTML = todoListHTML;
}

function addTodo()
{
  const inputElement = document.querySelector('.input-class');
  const name = inputElement.value;
  todoList.push(name);
  inputElement.value = '';
  renderTodoList();
}