import express from "express";
import { auth } from "../../middleware/auth";
import { addEmployee, getAllEmployees } from "../controller/employees";

const router = express.Router();

// /api/employees
router.get('/', auth, getAllEmployees);
// /api/employees/:id
router.get('/:id', auth, () => console.log('get employee'));
// /api/employees/add
router.post('/add', auth, addEmployee);
// /api/employees/remove/:id
router.delete('/remove/:id', auth, () => console.log('remove employee'));
// /api/employees/edit/:id
router.put('/remove/:id', auth, () => console.log('edit employee'));

export default router;