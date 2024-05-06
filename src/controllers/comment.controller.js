import Comment from '../models/comment.js';


export const createComment = async (req, res) => {
    try {
        const { content, authorName, authorEmail, projectID } = req.body;
        const comment = await Comment.create({ content, authorName, authorEmail, projectID });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el comentario' });
    }
}

export const getCommentsByProject = async (req, res) => {
    try {
        const { projectId } = req.params;
        const comments = await Comment.find({ projectID: projectId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
}

export const editComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;
        const comment = await Comment.findByIdAndUpdate(commentId, { content }, { new: true });
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el comentario' });
    }
}

export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        await Comment.findByIdAndDelete(commentId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el comentario' });
    }
}