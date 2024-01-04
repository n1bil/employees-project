import express from "express";
import { auth } from "../../middleware/auth";
import { addEmployee, editEmployee, getAllEmployees, getEmployee, removeEmployee } from "../controller/employees";

const router = express.Router();

// /api/employees
router.get('/', auth, getAllEmployees);
// /api/employees/:id
router.get('/:id', auth, getEmployee);
// /api/employees/add
router.post('/add', auth, addEmployee);
// /api/employees/remove/:id
router.delete('/remove/:id', removeEmployee);
// /api/employees/edit/:id
router.put('/edit', auth, editEmployee);

export default router;