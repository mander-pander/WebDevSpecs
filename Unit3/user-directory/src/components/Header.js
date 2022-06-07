import React from 'react';


const Header = (props) => {
  // const {index, setIndex, goHome} = props;

  const {goHome} = props;

  // const goHome = () => {
  //   setIndex(0);
  // }

  return (
    <div>
        <button onClick={goHome}>Home</button>
    </div>
  )
}

export default Header;
