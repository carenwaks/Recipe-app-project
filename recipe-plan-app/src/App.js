import React from 'react';
import './App.css';
import  Home from './components/Home';
import Search from './components/Search';
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
     <NavBar /> 
     <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>           
    </div>
  );
}

export default App;
