import { prismaClient } from "../application/database.js";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const user = await prismaClient.user.findFirst({
        where: {
            token: token,
            token_expiry: {
                gt: new Date()
            }
        }
    });

    if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = user;
    next();
};