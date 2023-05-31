import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'

// Stations component fetches and displays the list of stations
function Stations() {
    const [stations, setStations ] = useState([])
    const [search, setSearch] = useState("")

    // Fetch stations data
    useEffect(() => {
        fetch('http://localhost:3001/api/stations')
          .then(response => response.json())
          .then(data => {
            const sortedData = data.sort((a, b) => a.nimi.localeCompare(b.nimi));
            setStations(sortedData);
          })
    
      }, [])
    
    // Filter stations based on search input
    const filteredStations = stations.filter(station =>
        station.nimi.toLowerCase().includes(search.toLowerCase())
      )

    
    return (
       // Render the list of stations and a search box
      <div>
        <h1>Stations</h1>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e =>setSearch(e.target.value)}
        />
        <ul>
          {filteredStations.map(station => (
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


