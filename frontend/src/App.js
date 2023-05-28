import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import Journeys from './components/Journeys';
import Stations from './components/Stations';
import Station from './components/Station';

function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Helsinki City Bike App </h1>
        </header>
          <Routes>
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/stations/:id" element={<Station />} />
            <Route path="/stations" element={<Stations />} />
            <Route path="/" element={
              <div>
                <h2>Welcome to Helsinki City Bike App</h2>
                <p><Link to="/journeys">View Journeys</Link></p>
                <p><Link to="/stations">View Stations</Link></p>
              </div>
            }/>
          </Routes>
         </div>
        </Router>
  )
}

export default App;
