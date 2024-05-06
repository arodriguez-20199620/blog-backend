import express from 'express';
import { createComment, deleteComment, editComment, getCommentsByProject } from '../controllers/comment.controller.js';
import validateComment from '../middlewares/validateComment.js';

const router = express.Router();

router.post('/', validateComment, createComment);
router.get('/:projectId', getCommentsByProject);
router.put('/:commentId', editComment);
router.delete('/:commentId', deleteComment);


export default router;
