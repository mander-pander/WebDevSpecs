import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get("https://bobsburgers-api.herokuapp.com/characters/1")
    .then((res) => setCharacter(res.data))
  },[]);

  return (
    <div className="App">
      <h1>Name: {character.name}</h1>
      <h1>Occupation: {character.occupation}</h1>
      <h1>First Episode: {character.firstEpisode}</h1>
    </div>
  );
}

export default App;
