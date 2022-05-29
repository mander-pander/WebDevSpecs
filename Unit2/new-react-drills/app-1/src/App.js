import './App.css';
import {useState} from 'react'

// Create a basic react app where you type in a text box and it shows up as text on the DOM.

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)}/>
      <p>{input}</p>
    </div>
  );
}

export default App;
