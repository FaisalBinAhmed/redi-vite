import { useState } from "react";
import { TodoItem } from "./TodoItem";

type TodoItemType = {
    name: string
    isComplete?: boolean
}

export const TodoList = () => {

    const [userInput, setUserInput] = useState('');

    const [todos, setTodos] = useState<TodoItemType[]>([]);

    console.log('userInput is', userInput);

    function addTodo() {
        const newTodo: TodoItemType = {
            name: userInput,
            isComplete: false
        }
        setTodos(prev => [...prev, newTodo]);
        setUserInput('');
    }


    function handleComplete(index: number) {
        const updatedTodo = {
            ...todos[index],
            isComplete: true
        }
        setTodos(prev => prev.map((todo, i) => {
            if (i === index) {
                return updatedTodo
            }
            return todo
        }));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input type="text" placeholder="Add a new todo" value={userInput} onInput={e => setUserInput(e.target.value)} />
            <button className="p-2" onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => <TodoItem name={todo.name} isComplete={todo.isComplete} handleComplete={() => {
                    handleComplete(index)
                }} />)}
            </ul>
        </div>
    )

}