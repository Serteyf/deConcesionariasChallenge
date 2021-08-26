const vehicleService = require("../../services/vehicleService")

const vehiclesController = {
    // Show all vehicles
    getAll: async (req, res) => {
        const allVehicles = await vehicleService.findAll();

        res.json({
            meta: {
                status: 200,
                count: allVehicles.length,
                url: "/api/vehicles/index"
            },
            data: allVehicles
        })

    },
    // Get one property
    getOne: async (req, res) => {
        const oneVehicle = await vehicleService.findOne(req.params.id);

        res.json({
            meta: {
                status: 200,
                url: `/api/vehicles/index/${req.params.id}`
            },
            data: oneVehicle
        })

    },
    // Add a vehicle
    add: async (req, res) => {
        const _body = { name: req.body.name }

        const createVehicle = await vehicleService.create(_body)
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
        const _body = {
            name: req.body.name,
            categoryId: req.body.categoryId
        }
        await vehicleService.update(req.params.id, _body)
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
        await vehicleService.destroy(req.params.id);

        res.json({
            meta: {
                status: 200,
                url: `/api/vehicles/delete/${req.params.id}`
            },
            data: `Vehicle with id: ${req.params.id} deleted succesfully`
        })
    },
}

module.exports = vehiclesController;