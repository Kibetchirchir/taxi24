import request from 'supertest';
import app from '../app';


describe('404 error', () => {
    test('Should return 404 error if trying to access any route not there', async () => {
        const res = await request(app)
        .post('/hfdbjbdfshf');

        expect(res.status).toBe(404)
    })
})