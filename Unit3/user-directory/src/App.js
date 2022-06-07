import './App.css';
import { useState } from 'react';
import Header from  './components/Header';
import InfoCard from './components/InfoCard';
import UserForm from './components/UserForm';
import user from './data'

function App() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(user);

  const goHome = () => {
    setIndex(0);
  }

  return (
    <div className="App">
        <Header goHome={goHome}/>
        <InfoCard index={index} setIndex={setIndex} data={data} setData={setData}/>
        <UserForm data={data} setData={setData}/>
    </div>
  );
}

export default App;
