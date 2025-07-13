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
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
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