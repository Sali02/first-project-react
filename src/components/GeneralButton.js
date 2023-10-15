import React from "react";

function GeneralButton(props) {
  const buttonStyle = {
    padding: '4rem',
    maxWidth: '10rem',
    margin: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'green',
    color : 'white'
  };

  return (
    <button style={buttonStyle}>
      {props.fruit}
    </button>
  );
}

export default GeneralButton;
