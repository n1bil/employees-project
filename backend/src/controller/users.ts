import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    res.send('login');
};

export const register = async (req: Request, res: Response) => {
    res.send('register');
};

export const current = async (req: Request, res: Response) => {
    res.send('current');
};