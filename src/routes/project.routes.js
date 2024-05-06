import express from 'express';

import { createProject, deleteProject, editProject, getProjects } from '../controllers/project.controller.js';
import validateProject from '../middlewares/validateProject.js';

const router = express.Router();


router.post('/', validateProject, createProject);
router.get('/', getProjects);
router.put('/:projectId', editProject);
router.delete('/:projectId', deleteProject);

export default router;