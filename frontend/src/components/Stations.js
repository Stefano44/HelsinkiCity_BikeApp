import React, { useState, useEffect } from 'react'

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
                Station: {station.nimi} - Address: {station.osoite}
              </li>
            ))}
          </ul>
        </div>
      )
}

export default Stations


