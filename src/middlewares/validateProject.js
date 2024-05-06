const validateProject = (req, res, next) => {
    const { title, description, code, authorName, authorEmail } = req.body;

    if (!title || !description || !code || !authorName || !authorEmail) {
        return res.status(400).json('Todos los campos son obligatorios');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(authorEmail)) {
        return res.status(400).send('El formato del correo electrónico no es válido');
    }
    next();
};


export default validateProject;
