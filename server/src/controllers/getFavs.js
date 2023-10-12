// Importa el modelo Favorite
const { Favorite } = require('../DB_connection');

// Controlador para obtener todos los favoritos
exports.getAllFavorites = async (req, res) => {
  try {
    // Consulta todos los favoritos en la base de datos
    const favorites = await Favorite.findAll();

    // Envía los favoritos como respuesta en formato JSON
    res.json(favorites);
  } catch (error) {
    // Maneja los errores si ocurren
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los favoritos.' });
  }
};
