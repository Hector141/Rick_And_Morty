const Favorite = require('../models/Favorite');

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    // Elimina el personaje favorito con el id proporcionado
    await Favorite.destroy({ where: { id } });

    // Busca todos los personajes favoritos que quedan en la tabla
    const favorites = await Favorite.findAll();

    // Responde con el arreglo de personajes favoritos
    res.json(favorites);
  } catch (error) {
    // En caso de error, responde con el status 500 y el mensaje del error
    res.status(500).send(error.message);
  }
};

module.exports = { deleteFav };
