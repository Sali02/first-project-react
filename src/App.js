

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

  const styling = {
    display : 'flex',
    flowDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolut',
    top : '0',
    right : '0',
    fontSize : '2.5rem'
  }

  return (
    <div> 
      <Bottone />
      <Guess />
      <FruitButton />
      <Link to = "/" className = 'nav-item' style = { styling }>Homepage</Link>
      <br></br>
      <Link to = "/about-me" className = 'nav-item' style = { styling }>About Me</Link>
      <Routes>

        <Route exact path='/' element = { <Homepage /> }></Route>
        <Route exact path='/about-me' element = { <AboutMe /> }></Route>

      </Routes>
      
    </div>
    
  );
}

export default App;
