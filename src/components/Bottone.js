import React, { useState } from "react";

const buttonStyle = {
  backgroundColor : 'green',
  color : 'white',
  padding : '1.2rem',
  fontSize : '1.2rem',
  margin : '10% 30%'
}

function Bottone() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const change = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Aggiungi una classe al body in base alla modalità
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  return (
    <div>
      <button onClick={change} style={buttonStyle}>
        Change Light Mode
      </button>
    </div>
  );
}

export default Bottone;

