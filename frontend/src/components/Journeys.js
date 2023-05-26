import React, { useState, useEffect } from 'react'

function Journeys() {
    const [journeys, setJourneys ] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/journeys')
          .then(response => response.json())
          .then(data => setJourneys(data))
    
      }, [])
    
    
      return (
        <div>
          <h1>Journeys</h1>
          <ul>
            {journeys.map(journey => (
              <li key={journey.id}>
                Departure: {journey.departure_station_name} - Return: {journey.return_station_name} - Distance: {journey.covered_distance_m} m - Duration: {journey.duration_sec} sec
              </li>
            ))}
          </ul>
        </div>
      )
}

export default Journeys


