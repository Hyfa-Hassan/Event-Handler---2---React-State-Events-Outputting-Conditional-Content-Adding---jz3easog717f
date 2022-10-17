import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // use console.log
    console.log(event.target.value)
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={(event)=>handleClick("Button id is:-button-a")}>Button A</button>
      <button id="button-b" onClick={(event)=>handleClick("Button id is:-button-b")}>Button B</button>
    </div>
  )
}


export default App;
