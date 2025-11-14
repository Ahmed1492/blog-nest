import express, { Router } from 'express';
import { adminLogin } from '../controllers/admin.controller.js';

const router = Router();


// admin login
router.post('/login' , adminLogin);


export default router;