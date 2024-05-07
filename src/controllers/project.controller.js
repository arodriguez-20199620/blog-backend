import Project from '../models/project.js';

export const createProject = async (req, res) => {
    try {
        const { title, description, code, authorName, authorEmail } = req.body;

        const project = new Project({
            title,
            description,
            code,
            authorName,
            authorEmail,
            image: req.imagePath
        });

        await project.save();

        res.status(201).send(project);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el proyecto' });
    }
}

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ state: true });
        res.status(200).send(projects);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los proyectos' });
    }
}

export const editProject = async (req, res) => {
    try {
        const { projectId } = req.params;

        const { title, description, code } = req.body;

        const updateFields = {};
        if (title) updateFields.title = title;
        if (description) updateFields.description = description;
        if (code) updateFields.code = code;

        const project = await Project.findByIdAndUpdate(projectId, updateFields, { new: true });

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el proyecto' });
    }
}


export const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Project.findByIdAndUpdate(projectId, { state: false }, { new: true });
        res.status(200).json(project);

        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
}