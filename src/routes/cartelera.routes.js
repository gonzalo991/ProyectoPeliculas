const router = require('express').Router();
//Llamo al controlador de la carpeta controller
const Controller = require('../controllers/cartelera.controller');

//Ruta para obtener todas las peliculas
router.get('/', Controller.getCartelera);
//Ruta para obtener una película
router.get('/:id', Controller.oneMovie);
//Ruta para agregar peliculas
router.post('/addMovie', Controller.addMovie);
//Ruta para modificar los datos de las películas
router.post('/update/:id', Controller.updateCartelera);
//Ruta para borrar una pelicula
router.delete('/:id', Controller.deleteCartelera);

module.exports = router;