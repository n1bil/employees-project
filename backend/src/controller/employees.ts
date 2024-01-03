import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * @route GET /api/employees
 * @desc get all employees
 * @access Private
 */
export const getAllEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await prisma.employee.findMany();

        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ message: 'Failed to get employees' });
    }
};

/**
 * @route POST /api/employees/add
 * @desc add employee
 * @access Private
 */
export const addEmployee = async (req: Request, res: Response) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: "All the fields are required" });
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user?.id
            }
        });

        return res.status(201).json(employee);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};