import multiparty from 'multiparty';
import fs from 'fs';

// Middleware para manejar la carga de archivos con multiparty
const uploadImage = (req, res, next) => {
  const form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error al cargar la imagen' });
    }

    const imageFile = files.imageFile[0]; // Obtener el archivo de imagen

    // Si no se proporciona ninguna imagen, pasar al siguiente middleware
    if (!imageFile) {
      return next();
    }

    // Mover el archivo de imagen a un directorio de almacenamiento
    const imagePath = `uploads/${imageFile.originalFilename}`;
    fs.renameSync(imageFile.path, imagePath);

    // Agregar la información de la imagen al objeto de solicitud
    req.imagePath = imagePath;
    next();
  });
};
