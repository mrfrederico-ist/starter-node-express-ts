import * as request from 'supertest'

import app from '../app'

describe('GET /contact', () => {
  it('should return 200 OK', () => {
    return request(app).get('/contact').expect(200)
  })
})
