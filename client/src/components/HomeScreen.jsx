import React, {Fragment} from 'react';
import { Container, Nav } from 'react-bootstrap';
import '../styles/HomeScreen.css'

export default function HomeScreen(){
    return(
        <Fragment>
            <Container style={{padding: '0vw 5vw 2vw 5vw'}}>
            <div style={{padding: '2vw', textAlign: 'center'}}>
                <h2>deConcesionarias Challenge</h2>
            </div>

            <article style={{padding: 'inherit'}}>
                <p>El challenge consiste en la implementación de una WebAPI en ExpressJS, con una base de
                datos en PostgreSQL y una aplicación de ReactJS que consuma dicha WebAPI.</p>
                <p>Dicha aplicación permite dar de alta vehículos y evaluar las propiedades del mismo (ej:
                durante una inspección) con un puntaje del 0 al 5 estrellas para cada una. Cada propiedad se encuentra
                dentro de una categoría y las mismas se usan en la aplicación para separar las distintas
                propiedades</p>
            </article>
            
            <Nav className="nav1 me-auto">
                <div>
                    <p> Podes <Nav.Link className='link1' href="/vehicles" >ver todos los vehiculos</Nav.Link> o agregar uno <Nav.Link className='link1'href="/vehicles/add" >nuevo</Nav.Link></p>
                </div>
                <div>
                    <p> Tambien podes <Nav.Link className='link1'href="/properties" >ver todas las propiedades</Nav.Link> y crear una <Nav.Link className='link1' href="/properties/add" >nueva</Nav.Link> </p>
                </div>
                <div>
                    <p> <Nav.Link className='link1'href="https://github.com/Serteyf/deConcesionariasChallenge" >Repositorio</Nav.Link> </p>
                </div>
            </Nav>
            </Container>
            
        </Fragment>
    )
}