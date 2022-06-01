import React, {useState} from 'react';
import './App.css';
import NewTask from './NewTask';
import List from './List'

function App() {
  const [tasks, setTasks] = useState([])

  const addTaskHandler = (task) => {
    setTasks([...tasks, task])
  }
  
  return (
    <div className="App">
      <NewTask addTask={addTaskHandler} />
      <List tasks={tasks}/>
    </div>
  );
}

export default App;
