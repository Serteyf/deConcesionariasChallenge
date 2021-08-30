import React,  {useState, useEffect} from 'react';
import { Card, Button, Nav } from "react-bootstrap";
import EditProperty from "./EditProperty";
import './ShowProperties.css'

function ShowProperties(){
    const [propertiesData, setPropertiesData] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )

    console.log('propertiesData:', propertiesData)

    const fetchProperties = async() => {
        const blob = await fetch("/api/properties/index");
        const response = await blob.json();
        const propertiesData = await response.data;

        setPropertiesData(propertiesData);
        setIsLoading(false)
    };
    
    useEffect(() => {
        fetchProperties()
    }, []);
    const deleteProperty = async (id) => {
        try {
            await fetch(`/api/properties/delete/${id}`, {
                method: "DELETE"
            })
            window.location.reload()
        } catch (error) {
            console.error(error.message)
        }
    }
    
    return(
        <div sm={3} className="container d-flex justify-content-center text-center flex-wrap">
            {isLoading ?? <p>Cargando...</p>}
            {propertiesData.length === 0 && isLoading === false ? 
                <div>
                    <p>Oops... no hay ninguna propiedad en la base de datos</p>
                    <Nav.Link href="/properties/add">Agregá una propiedad</Nav.Link>
                </div> : propertiesData.map((data) => {
                return(
                    <Card key={data.id} style={{ width: '18rem', height: '12rem', margin: '10px 20px' }}>
                        <Card.Body style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', border: 'inset' }}>
                            <Card.Title style={{height: '50%', width: '16vw'}}>{data.name}</Card.Title>
                            <div style={{height: '25%'}}>
                                <Card.Text>{data.category.name}</Card.Text>
                            </div>
                            <div style={{height: '25%'}} className="d-flex w-100 justify-content-evenly">
                                <EditProperty properties={data} defaultSelect={data.name}/>
                                <Button as="button" type="submit" onClick={()=> {if(window.confirm("Seguro/a que queres borrar esto?"))  deleteProperty(data.id)}} style={{width: '6vw'}} className="btn btn-danger">Delete</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })} 
        </div>
    )
}

export default ShowProperties;


