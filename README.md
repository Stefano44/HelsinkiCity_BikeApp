https://helsinkicitybikeapp.fly.dev/

# Helsinki City Bike App

This web application displays data from journeys made with city bikes in the Helsinki Capital area. It provides a user interface to view journeys, stations, and station details.

## Technologies Used

- Backend: Express.js
- Frontend: React
- Database: PostgreSQL
- Map: Leaflet
- Styling: CSS

## Features

- Journey List: View a list of journeys with departure and return stations, covered distance, and duration.
- Station List: Browse all city bike stations.
- Station Details: View detailed information about a specific station, including the number of journeys starting from and ending at the station, and its location on the map.

## API Endpoints

- `/api/stations`: Retrieve a list of all stations.
- `/api/stations/:id`: Retrieve information about a specific station.
- `/api/journeys`: Retrieve a list of journeys with pagination support.
- `/api/journeys/:id`: Retrieve information about a specific journey.

## Additional Features

- Pagination: Use the "Previous" and "Next" buttons in the Journey List to navigate between pages.
- Search: Use the search box in the Stations List to filter stations by name.
- Map: The Station Details page includes a map displaying the stati
