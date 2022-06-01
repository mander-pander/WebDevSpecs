import React, {useState} from 'react';
import Todo from './Todo'
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const displayTasks = tasks.map((element, index) => {
    return <Todo task={element} key={index} />
  })

  return (
    <div className="App">
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => setTasks([...tasks, input])}>Add Task</button>
      {displayTasks}
    </div>
  );
}

export default App;
