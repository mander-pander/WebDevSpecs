import {useState} from 'react';
import './App.css';

function App() {
  const colors = ["blue", "orange", "yellow", "purple"];
  const [filter, setFilter] = useState("")

  let list = colors
    .filter((color) => {
      return color.includes(filter);
    })
    .map((color) => {
      return <li key={color}>{color}</li>
    })

  return (
    <div className="App">
        <input type="text" onChange={(e) => setFilter(e.target.value)}/>
        {list}
    </div>
  );
}

export default App;
