const request = require('supertest');
const server = require('../index');

describe('GET Endpoints', () => {
    it('Getting the /', async () => {
        const res = await request(server).get('/')
        expect(res.statusCode).toEqual(200)
    })
})
server.close()