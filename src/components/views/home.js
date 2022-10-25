import React from "react";
import Cards from "./fragments/cards";

class Home extends React.Component {
    //Defino el construtor
    constructor() {
        super();
        this.state = { _id: '', titulo: '', duracion: '', año: '', descripcion: '', imagen: '', cartelera: [] };
        this.addMovie = this.addMovie.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //funcion para agregar una película
    addMovie(ev) {
        //Antes que nada hago la consulta para saber si existe un id
        if (this.state._id) {
            //En caso de haber un id u objeto preexistente envio una petición del tipo PUT al controlador para editar el objeto
            fetch(`/cartelera/update/${this.state._id}`, {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                //Convierto la respuesta al tipo json
                .then(res => res.json())
                //imprimo por consola los datos y reseteo los estados nuevamente
                .then(data => {
                    console.log(data);
                    alert('Éxito')
                    this.setState({ _id: '', titulo: '', duracion: '', año: '', descripcion: '', imagen: '' })
                })
                //En caso de haber algún error lo mostraré por consola
                .catch(err => console.error(err));
            //Llamo a la funcion getMovies para recargar las películas con el nuevo objeto
            this.getMovies();
        } else {
            //Hago la petición vía fetch, declaro el método que será POST, envío el estado y las cabeceras
            fetch("/cartelera/addMovie", {
                method: "POST",
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                //Transformo la promesa en un documento tipo json
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    //Reseteo el estado
                    this.setState({ _id: '', titulo: '', duracion: '', año: '', descripcion: '', imagen: '' })
                })
                //Control de errores por consola
                .catch(err => console.error(err));
        }
    }

    //Función que envía la petición para traer las películas
    getMovies() {
        fetch("/cartelera")
            .then(res => res.json())
            .then(data => {
                //Guardo la respuesta del servidor en la variable películas del estado
                this.setState({ cartelera: data })
            });
    }

    //Función para editar los datos de las películas
    editMovies(id) {
        fetch(`/cartelera/${id}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    _id: data._id,
                    titulo: data.titulo,
                    duracion: data.duracion,
                    año: data.año,
                    descripcion: data.descripcion,
                    imagen: data.imagen
                })
            })
    }

    //Función para borrar una película
    deleteMovie(id) {
        if (confirm('¿Estás seguro que deseas borrar la película?')) {
            fetch(`/cartelera/${id}`, {
                method: "DELETE",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    alert('Película Eliminada');
                    this.getMovies();
                })
        }
    }

    //Con éste evento manejo el cambio de estado de los valores en el constructor
    handleChange(ev) {
        //Desestructuro el evento
        const { name, value } = ev.target;
        //Cambio el estado de las variables
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        return (
            <>
                <h1>Cartelera</h1>

                {/**Formulario para agregar ls cartelera */}
                <div className="formulario">
                    <form onSubmit={this.addMovie}>
                        <div className="campo">
                            <label htmlFor="titulo">Titulo</label>
                            <input onChange={this.handleChange} type="text" name="titulo" id="titulo" value={this.state.titulo}></input>
                        </div>

                        <div className="campo">
                            <label htmlFor="duracion">Duraciòn</label>
                            <input onChange={this.handleChange} type="text" name="duracion" id="duracion" value={this.state.duracion}></input>
                        </div>

                        <div className="campo">
                            <label htmlFor="año">Año</label>
                            <input onChange={this.handleChange} type="Number" name="año" id="año" value={this.state.año}></input>
                        </div>

                        <div className="campo">
                            <label htmlFor="descripcion">Descripciòn</label>
                            <input onChange={this.handleChange} type="text" name="descripcion" id="descripcion" value={this.state.descripcion}></input>
                        </div>

                        <div className="campo">
                            <label htmlFor="imagen">Imagen</label>
                            <input onChange={this.handleChange} type="text" name="imagen" id="imagen" value={this.state.imagen}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="form-button">Guardar Cambios</button>
                        </div>
                    </form>
                </div>

                <div className="container">
                    {this.state.cartelera.map(cartelera => {
                        return (
                            <>
                                <div className="tarjetas-container">
                                    <div className="botones">
                                        <button className="botonEditar btn btn-warning" onClick={() => this.editMovies(cartelera._id)}><i className="fas fa-edit"></i></button>
                                        <button className="botonBorrar btn btn-danger" onClick={() => this.deleteMovie(cartelera._id)}><i className="fas fa-times-circle"></i></button>
                                    </div>
                                    <div className="tarjetas">
                                        <Cards key={cartelera._id} pelicula={cartelera} />
                                    </div>
                                </div>
                            </>
                        )
                    })
                    }
                </div>
            </>
        )
    }

}

export default Home;