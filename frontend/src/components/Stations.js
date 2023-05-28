import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
function Stations() {
    const [stations, setStations ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/stations')
          .then(response => response.json())
          .then(data => setStations(data))
    
      }, [])

    
    return (
      <div>
        <h1>Stations</h1>
        <ul>
          {stations.map(station => (
            <li key={station.id}>
             <Link to={`/stations/${station.id}`}>
              {station.nimi}
             </Link>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Stations


