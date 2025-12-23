import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid4} from 'uuid';
import { addTask } from '../assets/features/taskSlice';
function AddTask() {

  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [status,setStatus] = useState('To Do')
  const dispatch = useDispatch()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newTask = {
      id:uuid4(), 
      title,
      description,
      status
    }
    dispatch(addTask(newTask))
    setTitle('')
    setDescription('')
    setStatus('To do')
  }

  return (
    <form className='mb-6' onSubmit={handleSubmit}>
      <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Add new task</h2>
      <div className="mb-4">
        <input type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Task Title'
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required />
      </div>
      <div className="mb-4">
        <textarea type="text"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder='Task description'
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2' required />
      </div>
      <div className="mb-4">
        <select 
        value={status}
        onChange={(e)=>setStatus(e.target.value)}
        className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2'>
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <button type='submit'
        className= 'w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'> Add task

      </button>
    </form>
  )
}

export default AddTask
