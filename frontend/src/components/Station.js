import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

// Station component fetches and displays information about a single station
function Station() {
    const { id } = useParams()
    const [station, setStation] = useState(null)

    // Fetch station data
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

    if (!station) return 'Loading...'


    // Define the station position and address for the map
    const position = [Number(station.y), Number(station.x)]
    const city = station.kaupunki === "Espoo" ? "Espoo" : "Helsinki"
    const address = `${station.osoite}, ${city}`

    // Render station information and a map with a marker for the station
    return (
        <div>
            <h1>{station.nimi}</h1>
            <p><b>Address: </b>{address}</p>
            <p><b>Journeys starting from this station: </b>{station.num_departures}</p>
            <p><b>Journeys ending at this station: </b>{station.num_returns}</p>

            <MapContainer center={position} zoom={15} style={{ height: "400px", width: "400px" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {station.nimi} <br /> {station.osoite}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Station
