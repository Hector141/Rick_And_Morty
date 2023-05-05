const { Favorite } = require("../models");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  // Validamos que se reciban todos los datos
  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: "Faltan datos" });
  }

  try {
    // Guardamos el personaje en la base de datos
    const favorite = await Favorite.findOrCreate({
      where: { name },
      defaults: { origin, status, image, species, gender },
    });

    // Buscamos todos los personajes favoritos
    const favorites = await Favorite.findAll();

    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postFav };