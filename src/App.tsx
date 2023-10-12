import React, {useState} from 'react';
import {useDataStore} from "./store/context";

function App() {
  const store = useDataStore();
  const [todoValue, setTodoValue] = useState({
      name: '',
      priority: 'low'
  });
  const [filterTodo, setFilterTodo] = useState('');

    const changeFilter = (valueFilter: string) => {
        setFilterTodo(valueFilter);
        console.log(store.todos.filterByPriority(valueFilter))
    }

  const addTodo = () => {
    if(todoValue.name === '') {
      return
    }
    store.todos.addNewTodo(todoValue)
    setTodoValue({name: '', priority: 'low'})
  };

  return (
    <>
      <h1>Main</h1>
      <input
          type="text"
          onChange={(e) => setTodoValue({...todoValue, name: e.target.value})}
          value={todoValue.name}
      />
        <select
            name="priority"
            onChange={(e) => {setTodoValue({...todoValue, priority: e.target.value})}}
            value={todoValue.priority}
        >
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
        </select>
        <label>Фильтер:</label>
        <select name="filterPriority" value={filterTodo} onChange={(e) => {changeFilter(e.target.value)}}>
            <option value=""></option>
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
        </select>
      <button onClick={addTodo}>Добавить задачу</button>
        {store.todos.todoList.map((todo,index) => (
            <ul key={index}>
                <li>{todo.name} <b>{todo.priority}</b></li>
            </ul>
        ))}
    </>
  );
}

export default App;
