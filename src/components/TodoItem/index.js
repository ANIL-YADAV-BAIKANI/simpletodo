import './index.css'

const TodoItem = props => {
  const {todos, onDeleteTodo} = props
  const {id, title} = todos

  const onDelete = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="container">
      <p className="todo-para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
