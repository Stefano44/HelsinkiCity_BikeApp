import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import "./App.css"

import Journeys from './components/Journeys';
import Stations from './components/Stations';
import Station from './components/Station';


function App() {


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <h1>Helsinki City Bike App </h1>
          </Link>
        </header>
          <Routes>
            <Route path="/journeys" element={<Journeys />} />
            <Route path="/stations/:id" element={<Station />} />
            <Route path="/stations" element={<Stations />} />
            <Route path="/" element={
              <div className="center-div">
                <h2>Welcome to Helsinki City Bike App</h2>
                <p><Link to="/journeys" className="main-button">View Journeys</Link></p>
                <p><Link to="/stations" className="main-button">View Stations</Link></p>
              </div>
            }/>
          </Routes>
         </div>
        </Router>
  )
}

export default App;
