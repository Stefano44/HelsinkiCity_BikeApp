import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'


function Station() {
    const { id } = useParams()
    const [station, setStation] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3001/api/stations/${id}`)
          .then(response => {
            if (!response.ok) { throw response }
            return response.json()
          })
          .then(data => {
            setStation(data)
            console.log(data) 
          }) 
          .catch(err => {
        console.log(err)
      });
    }, [id])

    if (!station) return 'Loading...';

    return (
        <div>
            <h1>{station.nimi}</h1>
            <p>Address: {station.osoite}</p>
            <p>Journeys starting from this station: {station.num_departures}</p>
            <p>Journeys ending at this station: {station.num_returns}</p>
        </div>
    )
}

export default Station
