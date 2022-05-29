import './App.css';

const colors = ["blue", "orange", "yellow", "purple"];

function App() {
  let list = colors.map((element) => {
    return <li key={element}>{element}</li>
    //key helps let react know what to render in a list of things
    //when using an array, give it a key
  })

  return (
    <div className="App">
      <ul>
      {list}
      </ul>
    </div>
  );
}

export default App;
