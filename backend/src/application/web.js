import express from 'express'
import { errorMiddleware } from '../middleware/error-middleware.js';
import cors from 'cors'
import { publicRouter } from '../routes/public-api.js';

export const web = express();

web.get("/", (req, res) => {
    res.json({ berhasil: true });
});

web.use(express.json());

web.use(publicRouter);

web.use(cors);

web.use(errorMiddleware);


