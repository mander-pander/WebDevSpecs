import React, {useState} from 'react'

function NewTask(props) {
  const [input, setInput] = useState('')

  const handleInput = (value) => setInput(value)
  const handleAdd = () => props.addTask(input)

  return (
    <div>
      <input type="text" onChange={(e) => handleInput(e.target.value)}/>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default NewTask
