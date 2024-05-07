import express from 'express';
import { createComment, deleteComment, editComment, getCommentsByProject } from '../controllers/comment.controller.js';
import { validateFields } from '../middlewares/validateField.js';

const router = express.Router();

router.post('/', validateFields, createComment);
router.get('/:projectId', getCommentsByProject);
router.put('/:commentId', editComment);
router.delete('/:commentId', deleteComment);


export default router;
