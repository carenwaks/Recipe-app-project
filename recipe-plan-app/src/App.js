import React from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h2>Main APP</h2>
      <div>
        <Home />
        <Search />
      </div>
    </div>
  );
}

export default App;
