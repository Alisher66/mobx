import {makeAutoObservable} from "mobx";


class TodoList {
    todos = [
        {id: 1, title: "todo1", completed: false},
        {id: 2, title: "todo2", completed: false}
    ];

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    toggleCompleted(id) {
        this.todos.forEach(t => {
            if (t.id == id) t.completed = !t.completed
        })
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

}

export const todoStore = new TodoList();