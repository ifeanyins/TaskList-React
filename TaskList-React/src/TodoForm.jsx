import {useState} from 'react'

const TodoForm = ({nsagba}) => {
  const [newTasks, setnewTasks] = useState('');
  

  const handleInputChange = (e)=>{
    setnewTasks(e.target.value);
  }
  
  const AddTask = (e)=>{
    e.preventDefault();
    if(newTasks.trim() !== "")
    nsagba(newTasks)
    setnewTasks('');
  }
  
  return (
    <form onSubmit={AddTask}> 
        <label htmlFor='input'>
          <span className='input-Text'>Task</span>
        </label>
        <br />
        <input id='input' placeholder='ENTER A TASK.....' type="text" value={newTasks} onChange={handleInputChange}/>
        <button className='save-btn'>Save</button>
      </form> 
  )
}

export default TodoForm
