import { Router } from "express";
import { createBlog } from "../controllers/blog.controller.js";

const router = Router();

router.post('/create-blog', createBlog);





export default router;