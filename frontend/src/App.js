import React from 'react'

import Journeys from './components/Journeys';
import Stations from './components/Stations';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Helsinki City Bike App </h1>
      </header>
      <Journeys />
      <Stations />
    </div>
)
}

export default App;
