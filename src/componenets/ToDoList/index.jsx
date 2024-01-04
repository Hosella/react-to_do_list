import { todos } from '../../utils/todos'
import { ToDoItem } from '../ToDoItem';
import './style.scss'

export const ToDoList = () => {
  return(
    <div className='ToDoList'>
      <span className='ToDoList__title'>To Do List</span>
      {todos.map((todo) => (
        <ToDoItem todo={todo} key={todo.id}/>
      ))}
    </div>
  );
}
