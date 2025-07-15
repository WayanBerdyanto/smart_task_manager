import express from "express";
import userController from "../controllers/userController.js";

import { authMiddleware } from "../middleware/auth-middleware.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);

userRouter.get('/api/users/current', userController.getUser);

userRouter.delete('/api/users/logout', userController.logoutUser);

export {
    userRouter
}