const validateComment = (req, res, next) => {
    const { content, authorName, authorEmail, projectID } = req.body;

    if (!content || !authorName || !authorEmail || !projectID) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(authorEmail)) {
        return res.status(400).send('El formato del correo electrónico no es válido');
    }

    next();
};

export default validateComment;
