const { Favorite } = require("../DB_connection");

const createFavorite = async (req, res) => {
  try {
    const {id, name, image, status, gender, origin, species } = req.body;

    // Verifica que los campos requeridos estén presentes
    if (!name) {
      return res.status(400).json({ message: 'El campo "name" es obligatorio' });
    }

    // Crea un nuevo elemento en Favoritos
    const newFavorite = await Favorite.create({
      id,
      name,
      image,
      status,
      gender,
      origin,
      species,
    });

    // Envía la respuesta con el nuevo elemento creado
    res.status(201).json(newFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar elemento a Favoritos' });
  }
};

module.exports = { createFavorite };