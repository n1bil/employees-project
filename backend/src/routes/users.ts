import { auth } from './../../middleware/auth';
import express from 'express';
import { current, login, register } from '../controller/users';

const router = express.Router();

router.post('/login', login);
router.post('/register', register);
router.get('/current', auth, current);


export default router;