import { useMemo } from 'react';
import { users } from '../../utils/users'
import './style.scss'

export const ToDoItem = ({ todo }) => {
  const { userId, title, completed } = todo;

  let newUser = useMemo(() => {
    return users.find(user => user.id === userId) || {}
  }, [userId]);

  return(
    <div className='ToDoItem'
      style={{borderColor: completed ? 'LightSlateGray' : 'black', backgroundColor: completed ? 'LightSteelBlue' : 'LightSkyBlue', color: completed ? 'LightSlateGray' : 'black'}}>
      <span className='ToDoItem__title'>{title}</span>
      <br />
      <span>
        <span className='ToDoItem__username'>{newUser.username}</span>
        <br />
        <span className='ToDoItem__name'>{newUser.name}</span>
        <br />
        <span className='ToDoItem__email'>{newUser.email}</span>
      </span>
    </div>
  );
}