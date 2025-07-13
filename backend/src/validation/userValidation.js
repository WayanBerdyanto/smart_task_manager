import Joi from "joi";


const registerUserValidation = Joi.object({
    full_name: Joi.string().max(100).required(),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().max(100).required(),
});

const loginUserValidation = Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().max(100).required(),
});

const getUserValidation = Joi.string().max(100).required();


const updateUserValidation = Joi.object({
    full_name: Joi.string().max(100).optional(),
    email: Joi.string().max(100).optional(),
    password: Joi.string().max(100).optional(),
});
export { 
    registerUserValidation, 
    loginUserValidation,
    getUserValidation,
    updateUserValidation
}