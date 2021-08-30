import React, {useState, useEffect} from "react";
import { Button, Modal, Form } from "react-bootstrap";

function EditProperty( {properties} ){
    const [name, setName] = useState( "" );
    console.log('name:', name)
    const [categoryId, setCategoryId] = useState( properties.category.id )
    console.log('categoryId:', categoryId)
    const [categoryData, setCategoryData] = useState( [] );

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { name, categoryId };
            await fetch(`/api/properties/edit/${properties.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            // window.location = "/";
            // handleClose();
            window.location.reload()
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        const fetchCategories = async() => {
            const blob = await fetch("/api/properties/categories");
            const response = await blob.json();
            const categoriesData = await response.data;
            
            setCategoryData(categoriesData)
        };
        
        fetchCategories(); 
    }, []);

    return(
        <form onSubmit={onSubmitForm}>
            <Button style={{width: '6vw'}} variant="outline-primary" className="btn" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit {properties.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={properties.name}
                    > 
                    </Form.Control>
                    <Form.Select 
                        aria-label="Default select example"
                        defaultValue={properties.categoryId}
                        onChange={e => setCategoryId(e.target.value)}>  
                            {categoryData.map((category) => { return <option key={category.id} value={category.id}>{category.name}</option>})}                            
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close </Button>
                    <button onClick={e => onSubmitForm(e)} type="submit" className="btn btn-primary" variant="primary"> Save Changes </button>
                </Modal.Footer>
            </Modal>
        </form>
    )
}

export default EditProperty