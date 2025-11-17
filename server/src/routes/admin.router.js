import express, { Router } from 'express';
import { adminLogin, getDashboard } from '../controllers/admin.controller.js';
import isAuth from '../middleware/auth.js';

const router = Router();


// admin login
router.post('/login', adminLogin);

// get dashboard data
router.get('/dashboard-data', isAuth, getDashboard);
export default router;