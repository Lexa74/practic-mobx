import {useDataStore} from "../../store/context";
import {useState} from "react";
import {TodoList} from "../../store/todos";

export const Main = () => {
    const store = useDataStore();
    const [todoValue, setTodoValue] = useState({
        name: '',
        priority: 'low'
    });
    const [filterTodo, setFilterTodo] = useState('');

    const addTodo = () => {
        if(todoValue.name === '') {
            return
        }
        store.todos.addNewTodo(todoValue);
        setTodoValue({
            name: '',
            priority: 'low'
        });
    };

    const todos: TodoList[] = filterTodo.length ? store.todos.filterByPriority(filterTodo) : store.todos.todoList
    return <>
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
        <button onClick={addTodo}>Добавить задачу</button>
        <label>Фильтр:</label>
        <select name="filterPriority" value={filterTodo} onChange={(e) => {setFilterTodo(e.target.value)}}>
            <option value=""></option>
            <option value="low">Низкий</option>
            <option value="medium">Средний</option>
            <option value="high">Высокий</option>
        </select>
        {todos.map((todo,index) => (
            <ul key={index}>
                <li>{todo.name} <b>{todo.priority}</b></li>
            </ul>
        ))}
    </>
}