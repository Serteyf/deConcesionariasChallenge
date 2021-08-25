const { Vehicle } = require("../../database/models")

const vehiclesController = {
    // Show all vehicles
    getAll: async (req, res) => {
        const listVehicles = await Vehicle.findAll()
        res.json({
            meta: {
                status: 200,
                count: listVehicles.length,
                url: "/api/vehicles"
            },
            data: listVehicles
        })
        
    },
    // Add a vehicle
    add: async (req, res) => {

    },
    // Edit a vehicle
    edit: async (req, res) => {

    },
    // Delete a vehicle
    delete: async (req, res) => {

    },
}

module.exports = vehiclesController;