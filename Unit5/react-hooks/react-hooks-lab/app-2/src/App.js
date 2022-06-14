import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import ListItem from './ListItem';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Pun?type=single&amount=10').then((res) => {
      setList(res.data.jokes);
    })
  }, [])
  return (
    <div className="App">
      {list.map((element, index) => {
        return <ListItem joke={element.joke} key={index} />
      })}
    </div>
  )
}

export default App;
