import React, {useEffect, useState} from 'react';
import { Form, Container, Row, FormLabel } from 'react-bootstrap';

const AddProperty = () => {
    const [propName, setPropName] = useState( "" );
    const [categoryData, setCategoryData] = useState( [] );
    const [categoryId, setCategoryId] = useState( 0 );    
    // const [isNameEmpty, setIsNameEmpty] = useState( true );
    // const [isCategoryEmpty, setIsCategoryEmpty] = useState( true );
    
    // const validate = (e) => {
    //     propName === "" ? setIsNameEmpty(true) : setIsNameEmpty(false)
    //     categoryId === "0" ? setIsCategoryEmpty (true) : setIsCategoryEmpty(false)
    //     if(isNameEmpty || isCategoryEmpty) e.preventDefault()
    // }

    const onSubmitForm = async (e) => {
            e.preventDefault()
            try {
                const body = { name:propName, categoryId:categoryId };
                await fetch("http://localhost:3000/api/properties/add", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                window.location.href = "/properties";
            } catch (err) {
                console.error(err.message)
            }

    }

    const fetchCategories = async() => {
        const blob = await fetch("http://localhost:3000/api/properties/categories");
        const response = await blob.json();
        const categoriesData = await response.data;
        
        setCategoryData(categoriesData)
    };
   
    useEffect(() => {
        fetchCategories(); 
    }, []);
    
    return(
        <div>
            <Container>
                <Form onSubmit={onSubmitForm} className="text-center d-flex flex-column">
                    <h2 className="m-5">Agrega una propiedad</h2>
                    <Row className="p-2 w-50 align-self-center">
                        <Form.Group controlId="nameForm">
                            <Form.Control 
                                type="text"
                                value={propName}
                                onChange={e => setPropName(e.target.value)}
                                placeholder="Nombre">
                            </Form.Control>
                            {/* {isNameEmpty ? <span className="alert">Error</span> : <span style={{display:'none'}}></span>} */}
                        </Form.Group>
                    </Row>
                    <Row className="p-2 w-50 align-self-center">
                        <Form.Group controlId="categoryForm">
                        <Form.Select 
                            aria-label="Select category"
                            defaultValue={'0'}
                            onChange={e => setCategoryId(e.target.value)}> 
                                <option disabled value="0">Selecciona una categoría</option> 
                                {categoryData.map((category) => { return   <option key={category.id} value={category.id}>{category.name} </option>
                                    
                                })}  
                        </Form.Select>
                            {/* {isCategoryEmpty ? <span className="alert">Error</span> : <span style={{display:'none'}}></span>} */}
                        </Form.Group>
                    </Row>

                    <button type="submit" className="m-3 w-25 align-self-center btn btn-primary"variant="primary">Add</button>
                    
                </Form>
            </Container>
        </div>
    )
}

export default AddProperty;