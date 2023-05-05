const users = require("../models/User")


exports.login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(403).json({ message: 'Contraseña incorrecta' });
    }

    res.json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};