import { Router } from "express";
import { createBlog } from "../controllers/blog.controller.js";
import upload from "../middleware/multer.js";
import isAuth from "../middleware/auth.js";

const router = Router();

router.post('/create-blog', isAuth, upload.single('image'), createBlog);





export default router;  