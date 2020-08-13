import React, { useState } from "react";

function App() {
  //Something has state when it is dynamic
  // this is necesarry to change the state
  //the destructering of the useState function
  //gives us 2 things the variable of the item we
  //want to manipulate and the function necessary to
  //manipulate it.
  const [heading, setHeading] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  const [isMouseOut, setMouseOut] = useState(false);

  function handleClick() {
    setHeading("submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
