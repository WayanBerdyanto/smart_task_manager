import express from "express";
import userController from "../controllers/userController.js";
import { passport } from "../config/passport/index.js";
import dotenv from "dotenv";

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL;

const publicRouter = new express.Router();

publicRouter.post('/api/users', userController.register);

publicRouter.post('/api/users/login', userController.login);

publicRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

publicRouter.get('/auth/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: '/' }),
    async (req, res) => {
        const { token, full_name, email } = req.user;
        // res.json({
        //     token,
        //     user: { email, full_name }
        // });
        res.redirect(`${FRONTEND_URL}/oauth-callback?token=${token}&name=${full_name}&email=${email}`)
    }
);

publicRouter.get('/auth/github',
    passport.authenticate('github', { scope: ['user:email'] })
);

publicRouter.get('/auth/github/callback',
    passport.authenticate('github', { session: false, failureRedirect: '/' }),
    async (req, res) => {
        const { token, full_name, email } = req.user;
        // res.json({
        //     token,
        //     user: { email, full_name }
        // });
        res.redirect(`${FRONTEND_URL}/oauth-callback?token=${token}&name=${full_name}&email=${email}`)
    }
);

export {
    publicRouter
}