const Controller = {}
const Cartelera = require('../model/cartelera.model')


//Controlador para obtener los datos del usuario
Controller.getCartelera = async (req, res) => {
    //Utilizo el método para obtener todas las películas de la base de datos de forma
    //asíncrona
    const cartelera = await Cartelera.find();
    //Devuelvo la lista de peliculas en formato json
    res.json(cartelera);
}

//Controlador de obtención de una película de la cartelera
Controller.oneMovie = async (req, res) => {
    //Busco la pelicula elegida por id
    const oneMovie = await Cartelera.findById(req.params.id);
    //Devuelvo el response en formato json
    res.json(oneMovie);
}

Controller.addMovie = async (req, res) => {
    //Desestructuro los parámetros que recibo del body para guardarlos cada uno en una constante
    //cada constante corresponde su nombre con el nombre de cada valor que recibe el esquema de la base de datos
    const { titulo, duracion, año, descripcion, imagen } = req.body;
    //Instancio un nuevo objeto de la clase peliculas el cuál será guardado en la base de datos
    // y le paso los valores que recibí del body
    const addMovie = new Cartelera({ titulo, duracion, año, descripcion, imagen });
    //Utilizo la funcion save para guarda en la base de datos
    await addMovie.save();
    //Devuelvo un estado que imprimirá un mensaje en caso de que todo salga correctamente
    res.json({ status: 'Película agregada correctamente' });
}

//Controlador para actualizar los datos del usuario
Controller.updateCartelera = async (req, res) => {
    //Desestructuro los valores que recibo del body
    const { titulo, duracion, año, descripcion, imagen } = req.body;
    //Guardo los valores en una lista
    const updatedMovie = { titulo, duracion, año, descripcion, imagen };
    //Busco la película que quiero actualizar por id y le paso los nuevos valores
    await Cartelera.findByIdAndUpdate(req.params.id, updatedMovie);
    //Devuelvo un estado en caso de que todo esté correcto
    res.json({ status: 'Los campos se actualizaron con éxito' });
}

//Controlador para darse de baja
Controller.deleteCartelera = async (req, res) => {
    await Cartelera.findByIdAndRemove(req.params.id);
    res.json({ status: 'La película ha sido borrada' });
}

module.exports = Controller;