import React from 'react';
import {FaTimes} from 'react-icons/fa';


const Todo = ({tasks, delTask}) => {
  return (
    <ul>
    {tasks.length === 0 && 'No Todos!'}
    {tasks.map(e => <><li key={e.id}><input type='checkbox' checked={e.completed} />{e.title}</li><FaTimes style={{ cursor: 'pointer', color: 'red' }} onClick={() => delTask(e.id)} /></>)} 
    
  </ul>
  )
}

export default Todo

