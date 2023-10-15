import React, {useContext}  from 'react';
import  {useState} from 'react';
import './App.css';
import Bottone from './components/Bottone'
import Guess from './components/Guess';
import FruitButton from './components/FruitButton';


function App() {

 
  return (
    <div>
      <Bottone />
      <Guess />
      <FruitButton />
    </div>
    
  );
}

export default App;
