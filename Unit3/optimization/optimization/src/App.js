import React, {useState, useCallback, useMemo} from 'react';

import DemoList from './components/demo/DemoList';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const [listTitle, setListTitle] = useState('My List');
  console.log('App running');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items = {listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
