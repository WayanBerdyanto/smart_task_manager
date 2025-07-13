import express from 'express'
import { errorMiddleware } from '../middleware/error-middleware.js';
import cors from 'cors'
import { publicRouter } from '../routes/public-api.js';
import { passport } from '../config/passport/index.js';
import session from 'express-session';

export const web = express();

web.get("/", (req, res) => {
    res.json({ berhasil: true });
});

web.use(express.json());

web.use(session({
    secret: 'smart-task-secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 3600000
    }
}));

web.use(passport.initialize());
web.use(passport.session());

web.use(publicRouter);

web.use(cors());

web.use(errorMiddleware);


