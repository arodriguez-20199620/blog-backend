import express from 'express';
import { check } from 'express-validator';
import { createProject, deleteProject, editProject, getProjects } from '../controllers/project.controller.js';
import uploadImage from '../middlewares/uploadImage .js';
import { validateFields } from '../middlewares/validateField.js';

const router = express.Router();


router.post('/',
    [
        check("title", "This field is required").notEmpty(),
        check("description", "This field is required").notEmpty(),
        check("code", "This field is required").notEmpty(),
        check("authorName", "This field is required").notEmpty(),
        check("authorEmail", "This field is required").notEmpty(),
        validateFields,
    ], createProject);


router.get('/', getProjects);
router.put('/:projectId', editProject);
router.delete('/:projectId', deleteProject);

export default router;