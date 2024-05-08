import express from 'express';
import { check } from 'express-validator';
import { createComment, deleteComment, editComment, getCommentsByProject } from '../controllers/comment.controller.js';
import { validateFields } from '../middlewares/validateField.js';
import { projectExistById } from '../helpers/validateProjects.js';
import { commentExistById } from '../helpers/validateComments.js';

const router = express.Router();

router.post('/',
    [
        check("content", "This field is required").notEmpty(),
        check("projectID", "The id is not a valid MongoDB format").isMongoId(),
        check("projectID").custom(projectExistById),
        validateFields
    ], createComment);

router.get('/:projectId', getCommentsByProject);

router.put('/:commentId',
    [
        check("commentId", "The id is not a valid MongoDB format").isMongoId(),
        check("commentId").custom(commentExistById),
    ], editComment);

router.delete('/:commentId',
    [
        check("commentId", "The id is not a valid MongoDB format").isMongoId(),
        check("commentId").custom(commentExistById),
    ], deleteComment);


export default router;
