
type TodoItemProps = {
  name: string
  isComplete?: boolean
  handleComplete: () => void
}

export const TodoItem = ({name, isComplete, handleComplete}: TodoItemProps) => {


  return (
    <div className="mt-2 text-white p-4 flex flex-col gap-2 text-center border rounded">
      <div style={{
        textDecoration: isComplete ? 'line-through' : 'none'
      }}>{name}</div>
      <button onClick={handleComplete} className="p-2 bg-green-500 rounded text-white">Complete</button>
    </div>
  )
}