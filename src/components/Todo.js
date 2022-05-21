import React, {useState} from 'react';
import {todoStore} from "../store/TodoList";
import {observer} from "mobx-react";

const Todo = observer((props) => {
    const [text, setText] = useState("");

    const addTodoHandler = () => {
        let lastId = todoStore.todos.at(-1) ? todoStore.todos.at(-1).id + 1 : 1
        const newTodo = {
            id: lastId,
            title: text,
            completed: false
        }
        todoStore.addTodo(newTodo)
        setText("");
    }
    return (
        <div>
            <input type={text} value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button onClick={addTodoHandler}>Добавить</button>
            <ul>
                {todoStore.todos.map(todo => {
                    return (
                        <li
                            key={todo.id}
                            onClick={e => {
                                todoStore.toggleCompleted(todo.id)
                            }}
                            style={todo.completed ? {textDecoration: "line-through"} : {}}
                        >
                            {todo.title}
                            <button onClick={() => {todoStore.deleteTodo(todo.id)}}>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
})

export default Todo;