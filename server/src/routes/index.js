const express = require('express');
const router = express.Router();

// Importar los controladores
const { getCharById } = require('../controllers/getCharById');
const { login } = require('../controllers/login');
const { createFavorite } = require("../controllers/postFav");
const {deleteFav} = require("../controllers/deleteFav");
const {postUser} = require("../controllers/postUser")

const { getAllFavorites } = require('../controllers/getFavs');

// Rutas
router.get('/character/:id', getCharById);
router.get('/login', login);
router.get('/favorites', getAllFavorites);

router.post('/register', postUser)
router.post('/fav', createFavorite);
router.delete('/fav/:id', deleteFav);

//nuevas



module.exports = router;
