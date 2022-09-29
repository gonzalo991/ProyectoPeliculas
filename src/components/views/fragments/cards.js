import React from "react";
import { Card, Button } from 'react-bootstrap';

function Cards({ pelicula }) {

    const { _id, titulo, duracion, año, descripcion, imagen } = pelicula;

    return (
        <Card key={_id} style={{ width: '25rem', background: '#000', borderRadius: '8px'}}>
            <Card.Img style={{ widht: '250px', height: '250px' }} variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    Descripciòn: {descripcion}
                </Card.Text>
                <Card.Text>
                    Duracion: {duracion}
                </Card.Text>
                <Card.Text>
                    Año: {año}
                </Card.Text>
            </Card.Body>
            <Button variant="primary">Ver</Button>
        </Card>
    )
}


export default Cards;