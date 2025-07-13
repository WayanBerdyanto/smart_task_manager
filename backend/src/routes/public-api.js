import express from "express";
import userController from "../controllers/userController.js";
import { passport } from "../config/authSSO.js";

const publicRouter = new express.Router();

publicRouter.post('/api/users', userController.register);

publicRouter.post('/api/users/login', userController.login);

publicRouter.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

publicRouter.get('/auth/google/callback',
    passport.authenticate('google', { session: false }),
    async (req, res) => {
        const { token, full_name, email } = req.user;
        res.json({
            token,
            user: { email, full_name }
        });
    }
);

publicRouter.get('/logout', (req, res) => {
    req.logout(() => {
        req.session.destroy();
        res.redirect('/');
    });
});


publicRouter.get('/dashboard', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).send('Unauthorized');
}


export {
    publicRouter
}