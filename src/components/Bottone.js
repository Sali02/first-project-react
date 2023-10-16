import React, { useState } from "react";
import './Bottone.css';





function Bottone() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function changeBackground() {
    const buttonOverMode = document.getElementsByClassName("button-over-mode");
    buttonOverMode.style.backgroundColor = 'white';
    buttonOverMode.style.color = 'green';
  }

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
      <button className="button-over-mode" onClick={change}>
        Change Light Mode
      </button>
    </div>
  );
}

export default Bottone;


