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
            image: req.imagePath // Guardar el nombre del archivo de la imagen en el campo 'image'
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
        const project = await Project.findByIdAndUpdate(projectId, { title, description, code }, { new: true });
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el proyecto' });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        await Project.findByIdAndDelete(projectId);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el proyecto' });
    }
}