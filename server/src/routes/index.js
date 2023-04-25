const express = require('express');
const router = express.Router();

// Importar los controladores
const { getCharById } = require('../controllers/getCharById');
const { Login } = require('../controllers/login');
const { postFav, deleteFav } = require('../controllers/handleFavorites');

// Rutas
router.get('/character/:id', getCharById);
router.get('/login', Login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;

