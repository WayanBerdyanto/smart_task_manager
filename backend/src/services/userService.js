import { loginUserValidation, registerUserValidation } from "../validation/userValidation.js";
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

const login = async (request) => {
    const user = validation(loginUserValidation, request);

    const result = await prismaClient.user.findUnique({
        where: {
            email: user.email
        },
        select: {
            id: true,
            full_name: true,
            email: true,
            password: true
        }
    });

    if (!result) {
        throw new ResponseError(401, "Email or Password is wrong");
    }

    const isPasswordValid = await bcrypt.compare(user.password, result.password);

    if (!isPasswordValid) {
        throw new ResponseError(401, "Wrong Password");
    }

    const token = uuid().toString();

    const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3); // 3 jam

    return prismaClient.user.update({
        data: {
            token: token,
            token_expiry: expiry
        },
        where: {
            id: result.id
        },
        select: {
            id: true,
            full_name: true,
            email: true,
            token: true,
            token_expiry: true
        }
    });
}


const loginWithGoogle = async (googleProfile) => {
    const email = googleProfile.emails?.[0]?.value;

    const full_name = googleProfile.displayName;

    if (!email) throw new ResponseError(400, "Google account has no email");

    let user = await prismaClient.user.findUnique({
        where: { email }
    });

    if (!user) {
        user = await prismaClient.user.create({
            data: {
                id: uuid(),
                email,
                full_name,
                provider: "google"
            },
            select: {
                id: true,
                full_name: true,
                email: true
            }
        });
    }

    const token = uuid().toString();
    const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);

    await prismaClient.user.update({
        where: { id: user.id },
        data: { 
            token, 
            token_expiry: expiry,
            provider: "google"
        }
    });

    return {
        ...user,
        token,
        token_expiry: expiry
    };
}

const loginWithGithub = async (githubProfile) => {
    const email = githubProfile.emails?.[0]?.value;
    const full_name = githubProfile.displayName;

    if (!email) throw new ResponseError(400, "GitHub account has no email");

    let user = await prismaClient.user.findUnique({
        where: { email }
    });

    if (!user) {
        user = await prismaClient.user.create({
            data: {
                id: uuid(),
                email,
                full_name,
                provider: "github"
            },
            select: {
                id: true,
                email: true,
                full_name: true
            }
        });
    }

    const token = uuid();
    const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);

    await prismaClient.user.update({
        where: { id: user.id },
        data: { 
            token, 
            token_expiry: expiry,
            provider: "github"
        }
    });

    return { ...user, token, token_expiry: expiry };

}

export default {
    register,
    login,
    loginWithGoogle,
    loginWithGithub
}