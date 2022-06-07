import './App.css';
import { useState } from 'react';
import Header from  './components/Header';
import InfoCard from './components/InfoCard';

function App() {
  const [index, setIndex] = useState(0);

  const goHome = () => {
    setIndex(0);
  }

  return (
    <div className="App">
        <Header goHome={goHome}/>
        <InfoCard index={index} setIndex={setIndex}/>
    </div>
  );
}

export default App;
