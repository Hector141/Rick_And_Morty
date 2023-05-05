const { User } = require("../DB_connection")


const postUser = async (req, res) => {
    // Obtenemos el email y la password desde el Body
    const { email, password } = req.body;
  
    // Validamos que hayamos recibido ambos datos
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
  
    try {
      // Buscamos o creamos un usuario con el email y password recibidos
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { password },
      });
  
      // Si el usuario se creó correctamente, lo enviamos como respuesta
      if (created) {
        return res.status(201).json(user);
      }
  
      // Si el usuario ya existía, enviamos un mensaje de error
      return res.status(409).json({ message: "El usuario ya existe" });
    } catch (error) {
      // Si ocurrió un error, lo enviamos como respuesta
      return res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    postUser
}