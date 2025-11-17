import Router from 'express';
import { addComment, getComments, getBlogComments, getCommentsAdmin, deleteCommentById, approveComment } from '../controllers/comment.controller.js';
import isAuth from '../middleware/auth.js';
const router = Router();

// add comment
router.post('/add', addComment);


// get blog comments  (is Appoved)
router.post('/blog-comments', getBlogComments);

// get  comments (is approved = true)
router.get('/', getComments);

// get  comments 
router.get('/comments-admin', isAuth, getCommentsAdmin);


// delete  comment
router.post('/delete/:id', isAuth, deleteCommentById);

// approve  comment
router.post('/approve-comment', isAuth, approveComment);





export default router;