import { registerUserValidation } from "../validation/userValidation.js";
import { validation } from "../validation/validation.js";
import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const register = async (request) => {
    const user = validation(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where: {
            email: user.email
        }
    });

    if (countUser === 1) {
        throw new ResponseError(400, "Registrasi Failed");
    }

    user.password = await bcrypt.hash(user.password, 10);

    return prismaClient.user.create({
        data: {
            id: uuid(),
            ...user
        },
        select: {
            full_name: true,
            email: true
        }
    });
}

export default{
    register
}