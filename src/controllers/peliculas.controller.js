const movieController = {}
//Llamo al esquema del documento peliculas de la carpeta model
const Peliculas = require('../model/peliculas.model');


//Declaro un controlador para que me traiga todas las películas
movieController.movies = async (req, res) => {
    //Utilizo el método para obtener todas las películas de la base de datos de forma
    //asíncrona
    const peliculas = await Peliculas.find();
    //Devuelvo la lista de peliculas en formato json
    res.json(peliculas);
}

//Controlador para buscar una sola pelicula por id
movieController.oneMovie = async (req, res) => {
    //Busco la pelicula elegida por id
    const oneMovie = await Peliculas.findById(req.params.id);
    //Devuelvo el response en formato json
    res.json(oneMovie);
}

//Controlador para agregar películas
movieController.addMovie = async (req, res) => {
    //Desestructuro los parámetros que recibo del body para guardarlos cada uno en una constante
    //cada constante corresponde su nombre con el nombre de cada valor que recibe el esquema de la base de datos
    const { titulo, duracion, año, descripcion, imagen } = req.body;
    //Instancio un nuevo objeto de la clase peliculas el cuál será guardado en la base de datos
    // y le paso los valores que recibí del body
    const addMovie = new Peliculas({ titulo, duracion, año, descripcion, imagen });
    //Utilizo la funcion save para guarda en la base de datos
    await addMovie.save();
    //Devuelvo un estado que imprimirá un mensaje en caso de que todo salga correctamente
    res.json({ status: 'Película agregada correctamente' });
}

//Controlador para editar los valores de las peliculas
movieController.updateMovie =  async (req, res) => {
    //Desestructuro los valores que recibo del body
    const { titulo, duracion, año, descripcion, imagen } = req.body;
    //Guardo los valores en una lista
    const updatedMovie = { titulo, duracion, año, descripcion, imagen};
    //Busco la película que quiero actualizar por id y le paso los nuevos valores
    await Peliculas.findByIdAndUpdate(req.params.id, updatedMovie);
    //Devuelvo un estado en caso de que todo esté correcto
    res.json({ status: 'Los campos se actualizaron con éxito' });
}

//Controlador para borrar una película
movieController.deleteMovie = async (req, res) => {
    await Peliculas.findByIdAndRemove(req.params.id);
    res.json({ status: 'La película ha sido borrada' });
}

module.exports = movieController;