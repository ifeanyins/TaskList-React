import { SetStateAction, useState } from 'react';
import {FaTimes} from 'react-icons/fa'

const List = () => {
  
  const [newTasks, setnewTasks] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const handleInputChange = (e)=>{
    setnewTasks(e.target.value);
  }

  const AddTask = (e)=>{
    e.preventDefault();
    if(newTasks.trim() !== "")
    setTasks(t =>[...t, {title:newTasks, id:crypto.randomUUID(), completed:false}]);
    setnewTasks('')
  }

  const delTask = (id) => {
    const filteredTasks = tasks.filter(e => e.id !== id);
    setTasks(filteredTasks);
  }

  const toggleTodo = (id, completed) => {
   return setTasks(t => {
      return t.map(todo => {
        if ( todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }
  return (
    <>
      <div>
        <label htmlFor='input'>
          <span className='input-Text'>Task</span>
        </label>
        <br />
        <input id='input' placeholder='ENTER A TASK.....' type="text" value={newTasks} onChange={handleInputChange}/>
        <button className='save-btn' onClick={AddTask}>Save</button>
      </div>
      <ul>
        {tasks.length === 0 && 'No Todos!'}
        {tasks.map(e => <li key={e.id}><input type='checkbox' checked={e.completed} onChange={f => toggleTodo(e.id, f.target.completed)}/>{e.title}<FaTimes style={{cursor:'pointer', color:'red'}} onClick={()=> delTask(e.id)}/></li>)}
      </ul>
    </>
  )
}
// get each index for tasks

// render the todo check
// add remainder 
// delete button check
// local storage 
export default List
