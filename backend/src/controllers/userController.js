import userService from "../services/userService.js";


const register = async (req, res, next) => {
    try {

        const result = await userService.register(req.body);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const login = async (req, res, next) => {
    try {

        const result = await userService.login(req.body);

        res.status(200).json({
            data: result
        });

    } catch (e) {
        next(e)
    }
}


const getUser = async (req, res, next) => {
    try {
        const email = req.user.email;

        const result = await userService.getUser(email);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const user = req.user;

        const result = await userService.updateUser(user, req.body);

        res.status(200).json({
            message: "User updated successfully",
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const logoutUser = async (req, res, next) => {
    try {
        const result = await userService.logoutUser(req.user.email);

        res.status(200).json({
            message: 'Logout successfully',
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    register,
    login,
    getUser,
    updateUser, 
    logoutUser
}