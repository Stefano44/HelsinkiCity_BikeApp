import React, { useState, useEffect } from 'react'

function Journeys() {
    const [journeys, setJourneys ] = useState([])
    const [page, setPage] = useState(1)
    const size = 50

    useEffect(() => {
        fetch(`http://localhost:3001/api/journeys?page=${page}&size=${size}`)
          .then(response => response.json())
          .then(data => setJourneys(data))
    
      }, [page])
      
    const convertDistanceToKm = (meters) => {
        return (meters / 1000).toFixed(2);
    } 

    const convertDurationToMinSec = (sec) => {
      const minutes = Math.floor(sec / 60)
      const seconds = sec % 60
      return `${minutes} min ${seconds} sec`
    }
    
    
      return (
        <div>
          <h1>Journeys</h1>
          <ul>
            {journeys.map(journey => (
              <li key={journey.id}>
                <p><b>Departure: </b> {journey.departure_station_name}</p>
                <p><b>Return: </b>{journey.return_station_name}</p>
                <p><b>Distance: </b>{convertDistanceToKm(journey.covered_distance_m)} km - <b>Duration: </b>{convertDurationToMinSec(journey.duration_sec)}</p>
              </li>
            ))}
          </ul>

          <button className="pagination-button" onClick={() => setPage(page => Math.max(page - 1, 1))}>Pervious</button>
          <button className="pagination-button" onClick={() => setPage(page => page + 1)}>Next</button>
        </div>
      )
}

export default Journeys


