import React, { useState, useEffect } from 'react'

function Journeys() {
    const [journeys, setJourneys ] = useState([])
    const [page, setPage] = useState(1)
    const size = 100

    useEffect(() => {
        fetch(`http://localhost:3001/api/journeys?page=${page}&size=${size}`)
          .then(response => response.json())
          .then(data => setJourneys(data))
    
      }, [page])
    
    
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

          <button onClick={() => setPage(page => Math.max(page - 1, 1))}>Perviouos Page</button>
          <button onClick={() => setPage(page => page + 1)}>Next Page</button>
        </div>
      )
}

export default Journeys


