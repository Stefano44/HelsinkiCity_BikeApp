import React, { useState, useEffect } from 'react'

function App() {

  const [journeys, setJourneys ] = useState([])
  const [stations, setStations] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/journeys')
      .then(response => response.json())
      .then(data => setJourneys(data))

    fetch('http://localhost:3001/api/stations')
      .then(response => response.json())
      .then(data => setStations(data))
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

      <h1>Stations</h1>
      <ul>
        {stations.map(stations => (
          <li key={stations.id}>
            Station: {stations.nimi} - Address: {stations.osoite}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
