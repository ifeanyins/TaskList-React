import { SetStateAction, useState } from 'react';
import {FaTimes} from 'react-icons/fa'

const List = () => {
  
  const [newTasks, setnewTasks] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const handleInputChange = (e)=>{
    setnewTasks(e.target.value);
  }

  const AddTask = ()=>{
    setTasks([...tasks, {title:newTasks, id:crypto.randomUUID(), completed:false}])
  }

  const delTask = (id) => {
    const filteredTasks = tasks.filter(e => e.id !== id);
    setTasks(filteredTasks);
  }
  return (
    <>
      <div>
          <label htmlFor='input'/>
            <span className='input-Text'>Task</span>
              <br />
              <input id='input' placeholder='ENTER A TASK.....' type="text" value={newTasks} onChange={handleInputChange}/>
        
        <button className='save-btn' onClick={AddTask}>Save</button>
      </div>
      <ul>
        {tasks.map(e => <li key={e.id}>{e.title}<FaTimes style={{cursor:'pointer', color:'red'}} onClick={()=> delTask(e.id)}/></li>)}
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
