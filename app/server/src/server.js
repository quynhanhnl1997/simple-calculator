import express from 'express';
import bodyParser from 'body-parser';
import detectPort from 'detect-port';
import getDebugger from 'debug';
import cors from 'cors';

const debug = getDebugger('app');
const users = {};
const app = express();

const start = async ({ port } = {}) => {
    port = port || process.env.PORT || (await detectPort(3001));

    app.use(cors());
    app.use(bodyParser.json());

    const authenticate = (req, res, next) => {
        const token =
            req.headers.authorization &&
            req.headers.authorization.slice('Bearer '.length);
        if (!token) {
            debug('Cannot get the token!');
            return res.sendStatus(400);
        }
        const user = users[token];
        if (!user) {
            return res.sendStatus(401);
        }
        req.user = user;
        req.token = token;
        return next();
    };

    const handleLogin = (req, res) => {
        const token = Math.random().toString();
        const user = req.body;
        users[token] = user;
        return res.json({ user: { token, ...user } });
    };

    app.get('/me', authenticate, (req, res) => {
        return res.json(req.user);
    });

    app.post('/me', authenticate, (req, res) => {
        Object.assign(req.user, req.body);
        return res.json(req.user);
    });

    app.get('/logout', authenticate, (req, res) => {
        delete users[req.token];
        res.sendStatus(200);
    });

    app.post('/register', handleLogin);
    app.post('/login', handleLogin);

    return new Promise((resolve) => {
        const server = app.listen(port, () => {
            debug(`Listening on port ${server.address().port}`);
            const originalClose = server.close.bind(server);
            server.close = () => {
                return new Promise((resolveClose) => {
                    originalClose(resolveClose);
                });
            };
            resolve(server);
        });
    });
};

export default app;
start();
