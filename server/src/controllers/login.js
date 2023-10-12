const { User } = require("../DB_connection");

exports.login = async (req, res) => {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    const user = await User.findOne({ where: { email, password } });

    if (!user) {
      return res.status(404).json({ message: 'Credenciales incorrectas' });
    }

    res.json({ access: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
