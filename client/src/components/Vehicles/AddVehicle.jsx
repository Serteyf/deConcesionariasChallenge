import React, {useState} from 'react';
import { Form, Container, Row } from 'react-bootstrap';

const AddVehicle = () => {
    const [vehicleName, setVehicleName] = useState( "" );
    
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const _setProperties = async (id) => {
                await fetch(`http://localhost:3000/api/vehicles/${id}`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({ name: vehicleName })
                });
            }
            await _setProperties();
            window.location.href = `/vehicles/`;
        } catch (err) {
            console.error(err.message)
        }
    }
    
    return(
        <div>
            <Container>
                <Form onSubmit={onSubmitForm} className="text-center d-flex flex-column">
                    <h2 className="m-5">Agrega un vehículo</h2>
                    <Row className="p-2 w-50 align-self-center">
                        <Form.Group controlId="nameForm">
                            <Form.Control 
                                type="text"
                                value={vehicleName}
                                onChange={e => setVehicleName(e.target.value)}
                                placeholder="Escribe el nombre del vehículo">
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <button type="submit" className="m-3 w-25 align-self-center btn btn-primary"variant="primary">Guardar</button>
                    
                </Form>
            </Container>
        </div>
    )
}

export default AddVehicle;