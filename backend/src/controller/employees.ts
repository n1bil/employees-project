import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type EmployeeEditRequest = {
    id: string;
    firstName: string;
    lastName: string;
    age: string;
    address: string;
};

type EmployeeCreateRequest = {
    firstName: string;
    lastName: string;
    age: string;
    address: string;
};

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
export const addEmployee = async (req: Request<object, object, EmployeeCreateRequest>, res: Response) => {
    try {
        const data = req.body;

        if (!data.firstName || !data.lastName || !data.address || !data.age) {
            return res.status(400).json({ message: "All the fields are required" });
        }

        const employee = await prisma.employee.create({
            data: {
                ...data,
                userId: req.user!.id
            }
        });

        return res.status(201).json(employee);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

/**
 * @route REMOVE /api/employees/remove/:id
 * @desc remove employee
 * @access Private
 */
export const removeEmployee = async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.employee.delete({
            where: { id }
        });

        res.status(200).json({ message: "Employee removed successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to remove employee" });
    }
};

/**
 * @route REMOVE /api/employees/edit/:id
 * @desc edit employee
 * @access Private
 */
export const editEmployee = async (req: Request<object, object, EmployeeEditRequest>, res: Response) => {
    const requestEmployee = req.body;

    try {
        const employee = await prisma.employee.update({
            where: {
                id: requestEmployee.id
            },
            data: {
                firstName: requestEmployee.firstName,
                lastName: requestEmployee.lastName,
                age: requestEmployee.age,
                address: requestEmployee.address,
            }
        });

        res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to edit employee" });
    }
};

/**
 * @route GET /api/employees/:id
 * @desc get employee
 * @access Private
 */
export const getEmployee = async (req: Request<{ id: string }>, res: Response) => {
    try {
        const { id } = req.params;

        const employee = await prisma.employee.findFirst({
            where: { id }
        });

        res.status(200).json(employee);
    } catch (error) {
        return res.status(500).json({ message: "Failed to get employee" });
    }
};