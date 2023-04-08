import { app, users } from './server';
import request from 'supertest';

beforeAll(() => {
    users['0.2817006201979373'] = 'test';
});

describe('If true', () => {
    it('If 1+1=2', async () => {
        const userResponse = await request(app)
            .post('/login')
            .send({ user: 'abc' });
        expect(userResponse.statusCode).toEqual(200);
    });

    it('If can get me', async () => {
        const userResponse = await request(app)
            .get('/me')
            .set('Authorization', 'Bearer 0.2817006201979373');
        expect(userResponse.statusCode).toEqual(200);
        expect(userResponse.body).toEqual('test');
    });
});
