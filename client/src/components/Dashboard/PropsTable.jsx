import React, {useState, useEffect, useCallback} from 'react';
import ReactStars from 'react-stars';

export default function PropsTable(props){
    const [vehicles, setVehicles] = useState( [] );
    const [value, setValue] = useState(  );

    const fetchVehicles = async() => {
        const blob = await fetch("http://localhost:3000/api/vehicles/index");
        const response = await blob.json();
        const vehiclesData = await response.data;
        setVehicles(vehiclesData);
    };

    useEffect(() => {
        fetchVehicles()
    }, [])

    const handleChange = async (vehicleId, jointTableId, new_rating) => {
        try {
            setValue(new_rating)
            const body = { value: value, jointTableId: jointTableId, vehicleId: vehicleId};
            await fetch(`http://localhost:3000/api/vehicles/rate/${vehicleId}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (err) {
            console.error(err.message)
        }
    }
    // useEffect(() => {
    //     handleChange()
    // }, [])

    return(
        <div className='container'>
            {vehicles.map((vehicle) => {
                return(  
                <div className= 'row'key={vehicle.id}> { vehicle.properties.filter((p) => { 
                    return (p.categoryId === props.categoryId) }).map(property => {
                        return(
                            <div className='col-6'style={{padding: '10px 20px', display: 'flex', justifyContent: 'space-between'}} key={property.id}>

                                <span style={{alignSelf: 'center'}} >{property.name}</span>
                            
                                <ReactStars
                                    count={5}
                                    half={false}
                                    value={property.vehicle_property.value}
                                    onChange={(new_rating) => handleChange(vehicle.id, property.vehicle_property.id, new_rating)}
                                    size={24}
                                    color2={'#ffd700'} 
                                />
                            </div>
                        )})}
                </div>
            )})}
        </div>
    )
}