

import './App.css';
import Bottone from './components/Bottone'
import Guess from './components/Guess';
import FruitButton from './components/FruitButton';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

/*
<Bottone />
      <Guess />
      <FruitButton />
*/


function App() {

 
  return (
    <div> 
      
      
      <Routes>

        <Route exact path='/' element = { Homepage }></Route>
        <Route exact path='/about-me' element = { AboutMe }></Route>

      </Routes>
      
    </div>
    
  );
}

export default App;
