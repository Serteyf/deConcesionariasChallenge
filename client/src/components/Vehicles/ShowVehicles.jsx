import React,  {useState, useEffect} from 'react';
import { Card, Button, Nav } from "react-bootstrap";

function ShowVehicles(){
    const [vehicleData, setVehicleData] = useState( [] );
    const [isLoading, setIsLoading] = useState( true )
    console.table(vehicleData)


    const getVehicles = async() => {
        const blob = await fetch("/api/vehicles/index");
        const response = await blob.json();
        const vehiclesData = await response.data;

        setVehicleData(vehiclesData);
        setIsLoading(false)
    };
    
    useEffect(() => {
        getVehicles()
    }, []);

    const deleteVehicle = async (id) => {
        try {
            await fetch(`/api/vehicles/delete/${id}`, {
                method: "DELETE"
            })
            window.location.reload()
        } catch (error) {
            console.error(error.message)
        }
    }
    
    return(
        <div sm={3} className="container d-flex justify-content-center text-center flex-wrap">
            {isLoading && <p>Cargando...</p>}
            {vehicleData.length === 0 && isLoading === false ? 
            <div>
                <p>Oops... no hay ningun vehiculo en la base de datos</p>
                <Nav.Link href="/vehicles/add">Agregá un vehículo</Nav.Link>
            </div> : vehicleData.map((data) => {
            return(
                <Card key={data.id} style={{ width: '18rem', height: '12rem', margin: '10px 20px' }}>
                    <Card.Body style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', border: 'inset' }}>
                        <Card.Title style={{height: '50%', width: '16vw'}}>{data.name}</Card.Title>
                        <div style={{height: '25%'}}>
                            <Card.Text>{data.properties.value}</Card.Text>
                        </div>
                        <div style={{height: '25%'}} className="d-flex w-100 justify-content-evenly">
                            <Nav.Link href={`/vehicles/${data.id}/dashboard`} >Dashboard</Nav.Link>
                            <Button as="button" type="submit" onClick={()=> {if(window.confirm("Are you sure you want to delete this?")) deleteVehicle(data.id)}} style={{width: '6vw'}} className="btn btn-danger">Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            )}) 
            }
        </div>
    )
}


export default ShowVehicles;
