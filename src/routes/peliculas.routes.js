const router = require('express').Router();
//Llamo al controlador de la carpeta controller
const movieController = require('../controllers/peliculas.controller');

//Ruta para obtener todas las peliculas
router.get('/', movieController.movies);
//Ruta para obtener una película
router.get('/:id', movieController.oneMovie);
//Ruta para agregar peliculas
router.post('/addMovie', movieController.addMovie);
//Ruta para modificar los datos de las películas
router.post('/update/:id', movieController.updateMovie);
//Ruta para borrar una pelicula
router.delete('/:id', movieController.deleteMovie);

module.exports = router;