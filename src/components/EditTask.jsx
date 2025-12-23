import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../assets/features/taskSlice';

const EditTask=({task}) =>{
  const [isEdit, setEdit] = useState(false);
  const [title,setTitle] = useState(task.title)
  const [description,setDescription] = useState(task.description)
  const [status,setStatus] = useState(task.status)
  const dispatch = useDispatch()

  const handleEdit = ()=>{
    dispatch(editTask({id:task.id,title, description,status}))
    setEdit(false)
  }

  return (
    <div className='flex space-x-2'>

      {isEdit ? (
        <div className='absolute bg-white p-4 border rounded-md shadow-lg z-10'>
      <h2 className='text-xl font-semibold mb-3 text-indigo-500'>Edit Task</h2>
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
      <div className='flex justify-between'>

      <button type='submit'
        className= ' bg-indigo-600 text-white py-2 p-2 rounded-md hover:bg-indigo-700' onClick={handleEdit}> Save
      </button>
      <button type='submit'
        className= ' bg-gray-300 py-2 mx-2 p-2 rounded-md ' onClick={()=>setEdit(false)}> Cancel
      </button>
  
        </div>
        </div>
      ):(
      
      <>
      <button className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600'
      onClick={()=>setEdit(true)}>Edit</button>
      </>
)}
    </div>
  )
}

export default EditTask
