const vehicleService = require("../../services/vehicleService");
const propertyService = require("../../services/propertyService");
const { vehicle_property } = require("../../database/models")

const vehiclesController = {
    // Show all vehicles
    getAll: async (req, res) => {
        const vehicles = await vehicleService.findAll();

        res.json({
            meta: {
                status: 200,
                count: vehicles.length,
                url: "/api/vehicles/index"
            },
            data: vehicles
        })

    },
    // Get one vehicle
    getOne: async (req, res) => {
        const vehicle = await vehicleService.findOne(req.params.id);
        
        res.json({
            meta: {
                status: 200,
                url: `/api/vehicles/index/${req.params.id}`
            },
            data: vehicle
        })
        
    },
    // Add a vehicle
    add: async (req, res) => {
        const createVehicle = await vehicleService.create({...req.body})
        res.json({
            meta: {
                status: 200,
                url: '/api/vehicles/add'
            },
            data: createVehicle
        })
    },
    // Edit a vehicle
    edit: async (req, res) => {
        await vehicleService.update(req.params.id, req.body)
        res.json({
            meta: {
                status: 200,
                url: `/api/vehicles/edit/${req.params.id}`
            },
            data: `Vehicle number ${req.params.id} updated`
        })
    },
    // Delete a property
    delete: async (req, res) => {
        await vehicleService.delete(req.params.id);

        res.json({
            meta: {
                status: 200,
                url: `/api/vehicles/delete/${req.params.id}`
            },
            data: `Vehicle with id: ${req.params.id} deleted succesfully`
        })
    },
    saveValue: async(req, res) => {
        // const properties = await vehicleService.findAll(); // find current vehicle
        // console.log('properties:', properties)
        // console.log('jointTable:', jointTable.propertyId)
        // && properties[joinTable.vehicleId] === joinTable.vehicleId
        const vehicle = await vehicleService.findOne(req.body.vehicleId); // find current vehicle
        const jointTable = await vehicle_property.findByPk(req.body.jointTableId); // find join table that matches the current vehicle
        if(vehicle.id === jointTable.dataValues.vehicleId ){ // if vehicles id from current vehicle + vehicle in join table match
            await vehicle.addProperty(jointTable.propertyId, { // ?? NOT SURE
                through: {
                    value: req.body.value, // Add value
                },
            });
        }

        res.json({
            meta: {
                status: 200,
                url: `/api/vehicles/rate/${req.params.id}`
            },
            data: ``
        })
    },
    createAndSetProperties: async (req, res) => {
        const newVehicle = await vehicleService.create({...req.body});
        const vehicle = await vehicleService.findOne(newVehicle.id);
        const properties = await propertyService.findAll();
        await vehicle.setProperties(properties, {
            through: {
                value: 0 ,
            },
        });
        res.json({
            meta: {
                status: 200,
            },
            data: ''
        })
    },
}

module.exports = vehiclesController;