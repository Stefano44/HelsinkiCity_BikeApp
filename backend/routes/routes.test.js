const request = require('supertest')
const app = require('../app')

describe('Station Endpoints', () => {
    it('should fetch all stations', async () => {
      const res = await request(app)
        .get('/api/stations')
      expect(res.statusCode).toEqual(200)
      expect(res.body).toHaveLength(457)
      expect(res.body[0]).toHaveProperty('fid')
      expect(res.body[0]).toHaveProperty('id')
      expect(res.body[0]).toHaveProperty('nimi')
      expect(res.body[0]).toHaveProperty('osoite')
      expect(res.body[0]).toHaveProperty('kaupunki')
      expect(res.body[0]).toHaveProperty('id')
      expect(res.body[0]).toHaveProperty('x')
      expect(res.body[0]).toHaveProperty('y')
    })
  
    it('should fetch a specific station', async () => {
      const res = await request(app)
        .get('/api/stations/505')
      expect(res.statusCode).toEqual(200)
      expect(res.body.id).toEqual(505)
      
    })

    it('should return 404 when station is not found', async () => {
        const res = await request(app)
          .get('/api/stations/999999')
        expect(res.statusCode).toEqual(404)
      })
  })
  
describe('Journey Endpoints', () => {
    it('should fetch all journeys', async () => {
      const res = await request(app)
        .get('/api/journeys')
      expect(res.body).toHaveLength(50)
      expect(res.statusCode).toEqual(200)
      expect(res.body[0]).toHaveProperty('id')
      expect(res.body[0]).toHaveProperty('departure')
      expect(res.body[0]).toHaveProperty('return')
      expect(res.body[0]).toHaveProperty('departure_station_id')
      expect(res.body[0]).toHaveProperty('departure_station_name')
      expect(res.body[0]).toHaveProperty('return_station_id')
      expect(res.body[0]).toHaveProperty('return_station_name')
      expect(res.body[0]).toHaveProperty('covered_distance_m')
      expect(res.body[0]).toHaveProperty('duration_sec')

    })
  
    it('should fetch a specific journey', async () => {
      const res = await request(app)
        .get('/api/journeys/1964141')
      expect(res.statusCode).toEqual(200)
      expect(res.body.id).toEqual('1964141')
    })

    it('should return 404 when journey is not found', async () => {
        const res = await request(app)
          .get('/api/journeys/9999999')
        expect(res.statusCode).toEqual(404)
      })

    it('should correctly handle pagination', async () => {
    const page = 2
    const size = 50
    const res = await request(app)
      .get(`/api/journeys?page=${page}&size=${size}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(size)
    expect(res.body[0].id).toEqual('1964189')
  })
  })