import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import {} from "../types/request";


const prisma = new PrismaClient();

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Not authorized" });
        }

        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            throw new Error("JWT secret not configured");
        }

        const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

        const user = await prisma.user.findUnique({
            where: { id: decoded.id }
        });

        if (!user) {
            throw new Error("User not found");
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({ message: "Not authorized" })
    }
};