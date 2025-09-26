import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState("dummy info")


  useEffect(() => {

    if (count > 10) {
      setInfo("Count is greater than 10")
    }

  }, [count])


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{info}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        {count === 5 && <Todolist />}
      </div>
    </>
  )
}

export default App



type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Todolist = () => {

  const [todos, setTodos] = useState<Todo[]>([])


  const fetchTodos = async () => {
    const todosFromApi = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todosJson: Todo[] = await todosFromApi.json()
    setTodos(todosJson)
  }

  useEffect(() => {
    fetchTodos()
  }, []) // it doesnt depends on anything, so it runs only once

  return <div>
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  </div>
}