import { SetStateAction, useState } from 'react';


const List = () => {
  
  const [newTasks, setnewTasks] = useState('')
  const [tasks, setTasks] = useState([])
  

  const handleInputChange = (e)=>{
    setnewTasks(e.target.value);
  }

  const AddTask = ()=>{
    setTasks([...tasks, newTasks])
  }
  return (
    <>
     <div>
        <label >
          <span className='input-Text'>Task</span>
            <br />
            <input className='input' placeholder='ENTER A TASK.....' type="text" value={newTasks} onChange={handleInputChange}/>
       </label>
       <button className='save-btn' onClick={AddTask}>Save</button>
    </div>
    <ul>
        {tasks.map(e => <li>{e}</li>)}
       
    </ul>
    </>
  )
}
// get each index for tasks

// render the todo
// add remainder 
// delete button
// local storage 
export default List
