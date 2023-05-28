import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
function Stations() {
    const [stations, setStations ] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3001/api/stations')
          .then(response => response.json())
          .then(data => setStations(data))
    
      }, [])

    const filteredStations = stations.filter(station =>
        station.nimi.toLowerCase().includes(search.toLowerCase())
      )

    
    return (
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


