import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please, fill in the fields" });
        }

        const user = await prisma.user.findFirst({
            where: { email },
        });

        const isPasswordCorrect = user && (await bcrypt.compare(password, user.password));
        const secret = process.env.JWT_SECRET;

        if (user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                email: user.email,
                name: user.name,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
            });
        } else {
            return res.status(400).json({ message: "Invalid login or password" });
        }
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res
                .status(400)
                .json({ message: "Please, fill in the required fields" });
        }

        const registeredUser = await prisma.user.findFirst({
            where: { email },
        });

        if (registeredUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        const secret = process.env.JWT_SECRET;

        if (user && secret) {
            res.status(201).json({
                id: user.id,
                email: user.email,
                name,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: "30d" }),
            });
        } else {
            return res.status(400).json({ message: "Failed to create user" });
        }
    } catch {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const current = async (req: Request, res: Response) => {
    return res.status(200).json(req.user);
};
