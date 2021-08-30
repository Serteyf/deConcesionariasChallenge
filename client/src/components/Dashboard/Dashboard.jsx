import React, {useState, useEffect, Fragment} from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import PropsTable from './PropsTable';
import '../../App.css'

export default function Dashboard(){
    const [categories, setCategories] = useState( [] );
    const [key, setKey] = useState('');

    const [vehicles, setVehicles] = useState( [] );

    const fetchVehicles = async() => {
        const blob = await fetch("/api/vehicles/index");
        const response = await blob.json();
        const vehiclesData = await response.data;

        setVehicles(vehiclesData);
    };

    useEffect(() => {
        fetchVehicles()
    }, [])

    const fetchCategories = async() => {
        const blob = await fetch("/api/properties/categories");
        const response = await blob.json();
        const data = response.data;

        setCategories(data)
    }

    useEffect( () => {
        fetchCategories();
    }, [])

    return(
        <Fragment>
            <div style={{padding: '2rem', textAlign: 'center'}}>
            {vehicles.map((vehicle) => {
                return(
                    <h3 key={vehicle.id}>{vehicle.name}</h3>
                )
            })}
            </div>
            <div>
                <Tabs
                    id="controlled-tab"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                <h3> Please choose a category </h3>
                    {categories.map((category) => {
                        return(
                        <Tab key={category.id} eventKey={category.id} title={category.name} className={category.icon}>
                            <PropsTable categoryId={category.id}></PropsTable>
                        </Tab>
                        )
                    })}
                </Tabs>
            </div>
           
        </Fragment>
    )
}