import app from './server';
import request from 'supertest';

describe('If true', () => {
    it('If 1+1=2', async () => {
        const userResponse = await request(app)
            .post('/register')
            .send({ user: 'abc' });
        console.log(userResponse);
        expect(userResponse.statusCode).toEqual(200);
    });
});
