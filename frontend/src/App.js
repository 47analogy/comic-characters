import React from 'react';
import './App.css';
import DisplayCharacters from './components/DisplayCharacters';

function App() {
  return (
    <div className='App'>
      <h1>Comic Characters</h1>
      <div>
        <DisplayCharacters />
      </div>
    </div>
  );
}

export default App;
